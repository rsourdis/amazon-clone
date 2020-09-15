import React from 'react'
// import CurrencyFormat from 'react-currency-format';
import '../assets/styles/Components/Subtotal.css'
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      {/* <CurrencyFormat 
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={0}
        displayText={'text'}
        thousandSeparator={true}
        prefix={'$'}
      /> */}
      <div>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` $ ${getBasketTotal(basket)}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
            </small>
          </div>
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
