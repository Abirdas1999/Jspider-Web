import React from 'react'

function EachProduct({ product }) {
    return (
        <>
            <div className="col-3" key={product.id}>
                <div className="card h-100 shadow-lg border-0">

                    <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.title}
                        style={{ height: "200px", objectFit: "cover" }}
                    />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold">
                            {product.title}
                        </h5>

                        <p className="card-text text-muted">
                            {product.description}
                        </p>

                        <div className="mt-auto">
                            <h6 className="text-warning fw-bold">
                                ₹ {product.price}
                            </h6>

                            <button className="btn btn-warning w-100 mt-2">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EachProduct