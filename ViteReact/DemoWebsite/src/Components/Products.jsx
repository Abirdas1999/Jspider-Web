import DemoData from '../Utility/DemoData'
import EachProduct from './EachProduct'

function Products({ updateCart }) {

  return (
    <div className="container pb-5">
      <div className="row g-4">
        {DemoData.map((product) => (
          <EachProduct
            key={product.id}
            product={product}
            updateCart={updateCart}
            isCart={false}   // 🔥 Important
          />
        ))}
      </div>
    </div>
  )
}

export default Products