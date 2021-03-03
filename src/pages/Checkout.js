import style from './css/Checkout.module.css'

function Checkout() {
    return(
        <div className={style.checkoutContainer}>
            <h1>Checkout</h1>
            {/* Shopping cart list component */}
            <form className={style.contactForm}>
                <h2 className={style.formTitle}>Delivery info</h2>
                <label htmlFor="name">Name</label>
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
                
                <label htmlFor="address">Shipping Address</label>
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

                <label htmlFor="contact">Contact details</label>
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

                {/* <h2>Delivery options</h2>
                <input type="radio" name="delivery" value="pickup"/>
                <label>Pick up at store</label>
                <input type="radio" name="delivery" value="delivered"/>
                <label>Get car delivered to you</label> */}

                <h2>Payment</h2>
                <label htmlFor="cardname">Name on card</label>
                <input 
                type="text" 
                name="cardname"
                placeholder="Full name" />

                <label htmlFor="cardnumber">Card Number</label>
                <input 
                type="number" 
                name="cardnumber"
                placeholder="Card number" 
                required/>
                
                <label htmlFor="CVV">CVV</label>
                <input 
                type="text" 
                name="CVV"
                maxLength="3"
                placeholder="CVV" 
                required/>

                <label htmlFor="expdate">Expiration Date</label>
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
                

            </form>
            {/* purchase button */}
        </div>
    )
}

export default Checkout;