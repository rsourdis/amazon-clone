import React from 'react'
import Subtotal from '../Components/Subtotal'
import { useStateValue } from '../StateProvider';
import '../assets/styles/Components/Checkout.css'
import CheckoutProduct from '../Components/CheckoutProduct';

function Checkout() {
  const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      <div className="checkout__left">
        <img className='checkout__ad' src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-amazon.jpg?20fWkG1X2YxnKCdF5DHfO4Lf8pkrHuoh&itok=UrMRpyj_" alt=""/>

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>

        <div className="checkout__products">
          {basket.map(item =>
            <CheckoutProduct key={item.id} {...item}/>
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
