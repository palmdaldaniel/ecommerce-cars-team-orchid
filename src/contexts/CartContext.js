import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";

export const CartContext = createContext();

function CartContextProvider(props) {
  const { savePurchase } = useContext(UserContext);
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [personalInformationSaved, setPersonalInformationSaved] = useState([]);
  //total value of cart & purchased
  const [cartValue, setCartValue] = useState(0);
  const [purchasedValue, setPurchasedValue] = useState(0);

  function addToCart(product) {
    if (typeof product !== "object") {
      console.error("Error adding to cart. 'product' was not an object");
      return;
    }
    setCart([...cart, product]);
  }

  useEffect(() => {
    // Load cart from local storage, if it exists
    const data = localStorage.getItem("cart");
    if (data !== null) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    // Calculate cartValue
    setCartValue(cart.reduce((prev, cur) => prev + cur.price, 0));

    // Save to local storage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // Calculates purchasedValue
    setPurchasedValue(purchased.reduce((prev, cur) => prev + cur.price, 0));
  }, [purchased]);
  
  // Function for deleting in cart, triggers when clicks on delete-button
  function deleteCartItem(cartIndex) {
    setCart(cart.filter((undefined, i) => i !== cartIndex));
  }

  // Triggers when user clicks on purchase button on checkout page
  const handlePurchase = () => {
    savePurchase([...cart]);
    // Copies cart to purchased array and sets cart to an empty array
    setPurchased([...cart]);
    setCart([]);
  };
  
  const getInformation = (name, lastname, address, postalcode, city, email, number, delivery ) => {
    const personal = {name, lastname, address, postalcode, city, email, number, delivery}
    setPersonalInformationSaved(personal);
  };

  const values = {
    cart,
    purchased,
    cartValue,
    purchasedValue,
    personalInformationSaved,
    addToCart,
    handlePurchase,
    deleteCartItem,
    getInformation,
  };

  return (
    <CartContext.Provider value={values}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;