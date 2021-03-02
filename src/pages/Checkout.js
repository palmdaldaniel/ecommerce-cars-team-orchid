import style from './css/Checkout.module.css'

function Checkout() {
    return(
        <div className={style.checkoutContainer}>
            <h1>Checkout</h1>
            {/* Shopping cart list */}
            <form className={style.contactForm}>
                <h2 className={style.formTitle}>Delivery info</h2>
                <label>Name</label>
                <input type="text"
                placeholder="First name"
                required
                />
                
                <input type="text"
                placeholder="Last name"
                required
                />

                <label>Shipping Address</label>
                <input type="text"
                placeholder="Address"
                required
                />

                <input type="text"
                placeholder="Postal Code"
                required
                />

                <input type="text"
                placeholder="City"
                required
                />

                <label>Contact details</label>
                <input type="text"
                placeholder="Email"
                required
                />

                <label></label>
                <input type="number"
                placeholder="Phone Number"
                required
                />

                <h2>Payment</h2>
                <label>Name on card</label>
                <input type="text" placeholder="Full name" />

                <label>Card Number</label>
                <input type="number" placeholder="Card number" required/>
                
                <label>CVV</label>
                <input type="text" 
                maxLength="3"
                placeholder="CVV" 
                required/>

                    <label>Expiration Date</label>
                    <div className={style.monthYearWrapper}>
                        <input type="number" 
                        placeholder="Month"
                        required/>
                        <input type="number"
                        placeholder="Year"
                        required />
                    </div>
                <input type="checkbox" />

            </form>
            {/* purchase button */}
        </div>
    )
}

export default Checkout;