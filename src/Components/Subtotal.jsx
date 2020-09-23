import React from 'react'
import { useHistory } from 'react-router-dom';
import CurrencyFormat from "react-currency-format";
import '../assets/styles/Components/Subtotal.css'
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

function Subtotal() {
  const history = useHistory();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* <div>
            <p>
              Subtotal ({basket.length} items):
              <strong>{` $ ${getBasketTotal(basket)}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />This order contains a gift
            </small>
          </div> */}
      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
