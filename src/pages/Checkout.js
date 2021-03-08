import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from "../components/CartItem.js"
import style from './css/Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Checkout() {

    const { cart, cartValue, handlePurchase } = useContext(CartContext);
    const history = useHistory();
    const [valueStr, setPriceString] = useState("");

    useEffect(() => {
        if (typeof cartValue === "number") {
            setPriceString((cartValue).toLocaleString(navigator.language, {style: 'currency', currency: 'SEK'}));
        }
	}, [cartValue]);

    //handles onClick on button
    const onPurchase = () => {
        
        handlePurchase();
        
        history.push("/confirmed")
    }

    return(
        <div className={style.checkoutContainer}>
            
            {/* Shopping cart list component */}
            <div className="container">
                <h1 className={style.pageTitle}>Shopping Cart</h1>
                <hr/>

                {!cart.length && (
                    <div>
                        <p>Your cart is empty</p>
                        {/* <hr/> */}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className={style.cartList}>
                        {cart.map((product, i) => (
                            <div className={style.productRow}>
                                <CartItem key={i} product={product} />
                                <div class="valign-wrapper">
                                    <button className={style.deleteBtn}>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </div>
                            </div>
                        ))}
                        <p className={`${style.totalCost} right-align`}>{valueStr}</p>
                    </div>
                )}
                <hr/>
            </div>

            <form className={style.contactForm}>
                <h2 className={style.formTitle}>Personal info</h2>

                <label className={style.label} htmlFor="name"><span className={style.titleInput}>Name</span>
                    <input 
                    className={style.inputField}
                    type="text"
                    name="name"
                    placeholder="First name"
                    required
                    />
                
                    <input 
                    type="text"
                    placeholder="Last name"
                    required
                    />
                </label>
                
                <label className={style.label} htmlFor="address"><span className={style.titleInput}>Shipping Address</span>
                    <input 
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    />

                    <input type="text"
                    name="address"
                    placeholder="Postal Code"
                    required
                    />
                
                    <input type="text"
                    name="address"
                    placeholder="City"
                    required
                    />
                </label>

                <label className={style.label} htmlFor="contact"><span className={style.titleInput}>Contact details</span>
                    <input 
                    type="text"
                    name="contact"
                    placeholder="Email"
                    required
                    />

                    <input 
                    type="number"
                    name="contact"
                    placeholder="Phone Number"
                    required
                    />
                </label>

               <h2 className={style.formTitle}>Delivery options</h2>
               <p>
                <label>
                    <input name="group1" type="radio" checked />
                    <span>Pick up at store</span>
                </label>
                </p>
                <p>
                <label>
                    <input name="group1" type="radio" />
                    <span>Get car delivered to home</span>
                </label>
                </p>
       
                <h2 className={style.formTitle}>Payment</h2>
                <label className={style.label} htmlFor="cardname"><span className={style.titleInput}>Name on card</span>
                    <input 
                    type="text" 
                    name="cardname"
                    placeholder="Full name" />
                </label>

                <label className={style.label} htmlFor="cardnumber"><span className={style.titleInput}>Card Number</span>
                    <input 
                    type="number" 
                    name="cardnumber"
                    placeholder="Card number" 
                    required/>
                </label>
                
                <label className={style.label} htmlFor="CVV"><span className={style.titleInput}>CVV</span>
                    <input 
                    type="text" 
                    name="CVV"
                    maxLength="3"
                    placeholder="CVV" 
                    required/>
                </label>

                <label className={style.label} htmlFor="expdate"><span className={style.titleInput}>Expiration Date</span>
                    <div className={style.monthYearWrapper}>
                        <input 
                        type="number" 
                        name="expdate"
                        placeholder="Month"
                        required/>
                        <input 
                        type="number"
                        name="expdate"
                        placeholder="Year"
                        required />
                    </div>
                </label>
                

            </form>

            <button className={style.purchaseBtn} onClick={onPurchase}>Purchase</button>
            
        </div>
    )
}

export default Checkout;