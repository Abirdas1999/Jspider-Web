import React from 'react'
import ProductList from './ProductList'

function Product({props}) {
    return (
        <>
            <div className="col-end-4 mt-4">
                {props.map((product) => {
                    return (<ProductList key={product.id} product={product} />)


                })}
            </div>
        </>
    )
}

export default Product