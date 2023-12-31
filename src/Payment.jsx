import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import './Payment.css'
import { getBasketTotal } from './reducer'
import { UserAuth } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'

function Payment() {
  const [basket, user] = UserAuth()
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [clientSecret, setClientSecret] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
      return response;
    }

    getClientSecret()
  }, [basket])

  const handleSubmit = async (e) => {
      e.preventDefault()
      setProcessing(true)

     const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
     }).then(({paymentIntent}) => {
      setSucceeded(true);
      setError(null)
      setProcessing(false)

      navigate("/orders")
     })
  }

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(error ? error.message : "");
  }
  return (
    <div className='payment'>
          <div className='payment__container'>
             <h1>
                Checkout (
                   <Link to="/checkout">{basket?.length} items
                   </Link>
           )
                </h1>

                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
        <div className='payment__section'>
         <div className='payment__title'>
          <h3>Review items and delivery</h3>
         </div>
         <div className='payment__items'>
           {basket.map(item => (
           <CheckoutProduct
           key={item.id}
           id={item.id}
           title={item.title}
            image={item.image}
             price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      </div>
            

     {/* Payment section - Payment method */}
         <div className='payment__section'>
         <div className="payment__title">
        <h3>Payment Method</h3>
     </div>
            
         <div className="payment__details">
             {/* Stripe magic will go */}
            <form onSubmit={handleSubmit}>
             <CardElement onChange={handleChange}/>

             <div className='payment__priceContainer'>
               <CurrencyFormat
                renderText={(value) => (
              <h3>Order Total: {value}</h3>
        )}
              decimalScale={2}
            value={getBasketTotal(basket)}
          displayType={"text"}
            thousandSeparator={true}
               prefix={"$"}
             />
         <button disabled={processing || disabled || succeeded}>
         <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
         </button>
          </div>
              {/* Errors */}
          {error && <div>{error}</div>}
          </form>
         </div>
        </div>
        </div>
        </div>
    )
}

export default Payment