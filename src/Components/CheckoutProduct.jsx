import React from 'react'
import { useStateValue } from '../StateProvider';

import '../assets/styles/Components/CheckoutProduct.css'


function CheckoutProduct({ id, title, price, img, rating, hideButton}) {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    })
  }

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__img' src={img} alt=""/>

      <div className="checkoutProduct__info">
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_, i) => (
              // <span role="img" aria-label='star' >⭐️ </span>
              <p>⭐️ </p>
            ))}
          </div>
          {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  )
}

export default CheckoutProduct
