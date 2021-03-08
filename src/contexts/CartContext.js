import { createContext, useEffect, useState } from "react";
// import useFetch from "./useFetch"

export const CartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [saveCart, setSaveCArt] = useState(false);

  //array for purchased cars to be rendered on confirmation page
  const [purchased, setPurchased] = useState([]);

  function addToCart(product) {
    if (typeof product !== "object") {
      console.error("Error adding to cart. 'product' was not an object");
      return;
    }
    setCart([...cart, product]);
    // allow saving to localstorage when button addToCart is clicked
    setSaveCArt(true);
  }

  // only trigger and save localstorage when addToCart is pressed
  useEffect(() => {
    saveCart && localStorage.setItem("cart", JSON.stringify(cart));
  }, [addToCart]);

  //total value of cart & purchased
  const [cartValue, setCartValue] = useState(0);
  const [purchasedValue, setPurchasedValue] = useState(0);

  //calculates cartValue & purchasedValue everytime cart or purchased updates
  useEffect(() => {
    setCartValue(cart.reduce((prev, cur) => prev + cur.price, 0));
    setPurchasedValue(purchased.reduce((prev, cur) => prev + cur.price, 0));
  }, [cart, purchased]);

  // Function for deleting in cart, triggers when clicks on delete-button
  function deleteCartItem(cartIndex) {
    // We only need the index thats why product is not read
    setCart(cart.filter((product, i) => i !== cartIndex));

    // also filter and update localStorage when deleteCartItem button is being pressed
    const filteredCartInLocalStorage = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem(
      "cart",
      JSON.stringify(
        filteredCartInLocalStorage.filter((c, i) => i !== cartIndex)
      )
    );
  }

  //triggers when user clicks on purchase button on checkout page
  const handlePurchase = () => {
    //copies cart to purchased array and sets cart to an empty array
    setPurchased([...cart]);
    setCart([]);
    // empty local storage when purchased button is pressed
    localStorage.length > 0 && localStorage.clear();
  };

  const values = {
    cart,
    addToCart,
    purchased,
    cartValue,
    purchasedValue,
    handlePurchase,
    deleteCartItem,
  };

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
}

export default CartContextProvider;
