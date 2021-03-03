import style from './css/Checkout.module.css'

function Checkout() {
    return(
        <div className={style.checkoutContainer}>
            <h1 className={style.checkoutTitle}>Checkout</h1>
            {/* Shopping cart list component */}
            <form className={style.contactForm}>
                <h2 className={style.formTitle}>Delivery info</h2>

                <label htmlFor="name"><span>Name</span>
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
                
                <label htmlFor="address"><span>Shipping Address</span>
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

                <label htmlFor="contact"><span>Contact details</span>
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

                {/* <h2>Delivery options</h2>
                <input type="radio" name="delivery" value="pickup"/>
                <label>Pick up at store</label>
                <input type="radio" name="delivery" value="delivered"/>
                <label>Get car delivered to you</label> */}


                <h2>Payment</h2>
                <label htmlFor="cardname"><span>Name on card</span>
                    <input 
                    type="text" 
                    name="cardname"
                    placeholder="Full name" />
                </label>

                <label htmlFor="cardnumber"><span>Card Number</span>
                    <input 
                    type="number" 
                    name="cardnumber"
                    placeholder="Card number" 
                    required/>
                </label>
                
                <label htmlFor="CVV"><span>CVV</span>
                    <input 
                    type="text" 
                    name="CVV"
                    maxLength="3"
                    placeholder="CVV" 
                    required/>
                </label>

                <label htmlFor="expdate"><span>Expiration Date</span>
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
            {/* purchase button */}
        </div>
    )
}

export default Checkout;