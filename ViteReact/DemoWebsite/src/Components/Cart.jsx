import React from 'react'
import EachProduct from './EachProduct';

function Cart({ cart, updateCart, decreaseQty }) {

  return (
    <div className="container pb-5">
      <div className="row g-4">

        {cart.length === 0 && (
          <p className="text-center">No items in cart</p>
        )}

        {cart.map((product) => (
          <EachProduct
            key={product.id}
            product={product}
            updateCart={updateCart}
            decreaseQty={decreaseQty}
            isCart={true}
          />
        ))}

      </div>
    </div>
  )
}

export default Cart