import { useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from "../components/CartItem.js"
import style from './css/Checkout.module.css'

function Checkout() {

    // const { cart, cartValue, handlePurchase } = useContext(CartContext);
    const { cartValue, handlePurchase } = useContext(CartContext);
    const history = useHistory();
    const [valueStr, setPriceString] = useState("");

    const [cart] = useState([
        {
            "make": "Chevrolet",
            "model": "Camaro",
            "year": 1973,
            "vin": "1D4PT5GK0BW487259",
            "city": "Santa Rosa",
            "descShort": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
            "descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "price": 554963,
            "miles": 15432,
            "image": "/assets/car-pictures/Chevrolet-Camaro-1973.jpg"
        },
        {
            "make": "Pontiac",
            "model": "Montana SV6",
            "year": 2006,
            "vin": "JN1CV6FE7DM360307",
            "city": "Jāsim",
            "descShort": "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
            "descLong": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            "price": 299379,
            "miles": 12346,
            "image": "/assets/car-pictures/Pontiac-Montana SV6-2006.jpg"
        }
    ]);

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
                        <hr/>
                    </div>
                )}

                {cart.length > 0 && (
                    <div>
                        {cart.map((product, i) => (
                            <div>
                                <CartItem key={i} product={product} />
                                <hr/>
                            </div>
                        ))}
                        <p className={`${style.totalCost} right-align`}>{valueStr}</p>
                    </div>
                )}
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