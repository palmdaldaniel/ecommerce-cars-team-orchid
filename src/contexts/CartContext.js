import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {

  const [cart, setCart] = useState([]);
  //array for purchased cars to be rendered on confirmation page
  const [purchased, setPurchased] = useState([]);

  function addToCart(product) {
    if (typeof product !== "object") {
      console.error("Error adding to cart. 'product' was not an object");
      return;
    }
    setCart([...cart, product]);
  }

  //total value of cart & purchased
  const [cartValue, setCartValue] = useState(0);
  const [purchasedValue, setPurchasedValue] = useState(0);

  // When component mounts (app startup)
  useEffect(() => {
    // Load cart from local storage, if it exists
    const data = localStorage.getItem("cart");
    if (data !== null) {
      setCart(JSON.parse(data));
    }
  }, []);

  // When cart changes
  useEffect(() => {
    //calculate cartValue
    setCartValue(cart.reduce((prev, cur) => prev + cur.price, 0));

    // Save to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // When purchased changes
  useEffect(() => {
    //calculates purchasedValue
    setPurchasedValue(purchased.reduce((prev, cur) => prev + cur.price, 0));
  }, [purchased]);
  
  // Function for deleting in cart, triggers when clicks on delete-button
  function deleteCartItem(cartIndex) {
    setCart(cart.filter((undefined, i) => i !== cartIndex));
  }

  //triggers when user clicks on purchase button on checkout page
  const handlePurchase = () => {
    //copies cart to purchased array and sets cart to an empty array
    setPurchased([...cart]);
    setCart([]);
  };

// Saves personal information to render on ConfirmationPage (reciept) 
  const [personalInformationSaved, setPersonalInformationSaved] = useState([]);
  const getInformation = (name, lastname, address, postalcode, city, email, number, delivery ) => {
    const personal = {name, lastname, address, postalcode, city, email, number, delivery}
    setPersonalInformationSaved(personal);
  };

  const values = {
    cart,
    addToCart,
    purchased,
    cartValue,
    purchasedValue,
    handlePurchase,
    deleteCartItem,
    getInformation,
    personalInformationSaved,
  };

  return (
    <CartContext.Provider value={values}>{props.children}</CartContext.Provider>
  );
}

export default CartContextProvider;
