import React from 'react'
import { useNavigate } from 'react-router-dom';

function EachProduct({ product, updateCart, decreaseQty, isCart }) {
    const navigate = useNavigate()

    const increment = () => {
        updateCart(product);
    };

    const decrement = () => {
        if (isCart) {
            decreaseQty(product.id);
        } else {
            updateCart(product); // Add to cart from product page
        }
    };

    return (
        <>
            <div className="col-3" key={product.id} style={{ cursor: "pointer" }} onClick={() => navigate(`details/${product.id}`)}>
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
                            <h3 className="text-warning fw-bold">
                                ₹ {product.price}/-
                            </h3>

                            {/* 🔹 Cart Buttons */}
                            {isCart && (
                                <div className="d-flex justify-content-center gap-5 align-items-center mt-2 px-2 py-1">

                                    <button
                                        className="btn btn-sm"
                                        style={{ fontSize: "2.5rem", color: "red" }}
                                        onClick={decrement}
                                    >
                                        -
                                    </button>

                                    <span className="fw-bold fs-5">
                                        {product.qty}
                                    </span>

                                    <button
                                        className="btn btn-sm"
                                        style={{ fontSize: "2rem", color: "green" }}
                                        onClick={increment}
                                    >
                                        +
                                    </button>

                                </div>
                            )}

                            {/* 🔹 Product Page Button */}
                            {!isCart && (
                                <div className="container text-center bg-warning">
                                    <button
                                        className="btn btn-sm"
                                        onClick={() => updateCart(product)}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EachProduct