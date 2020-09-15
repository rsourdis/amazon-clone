import React from 'react'
import '../assets/styles/Components/Product.css'
import { useStateValue } from '../StateProvider'

function Product({ id, title, img, price, rating }) {
  const [state, dispatch] = useStateValue()
  const handleAddToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        img,
        price,
        rating,
      }
    })
  }

  return (
    <div className='product'>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <span role="img" aria-label='star' >⭐️</span>
          ))}
        </div>
      </div>

      <img src={img} alt=""/>

      <button onClick={handleAddToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
