import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../assets/styles/Components/Payment.css'
import CheckoutProduct from '../Components/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from '../axios';
import { db } from '../firebase';

function Payment() {
  const history = useHistory();
  const [{basket, user}, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false);
  
  const stripe = useStripe();
  const elements = useElements();
  
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    }

    getClientSecret();
  }, [basket])

  console.log('Secret:', clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {

      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      })

      setSucceeded(true);
      setError(null);
      setProcessing(false);
      dispatch({
        type: 'EMPTY_BASKET',
      })
      history.replace('/orders')
    })
  }

  const handleChange = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to='/checkout'>{` ${basket?.length} items `}</Link>
          )
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__adress">
            <p>{user?.email}</p>
            <p>Peris y Valero, 29</p>
            <p>Barcelona, España</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct key={item.id} {...item}/>
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_detials">
              <form onSubmit={handleSubmit}>

                <CardElement onChange={handleChange}/>

                <div className="payment__priceContainer">
                  <h3>Order Total: ${getBasketTotal(basket)}</h3>

                  <button type='submit' disabled={processing || disable || succeeded}>
                    <span>{processing ? <p>Processing...</p> : 'Buy Now' }</span>
                  </button>

                </div>
                {error && <div>{error}</div>}
              </form>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Payment
