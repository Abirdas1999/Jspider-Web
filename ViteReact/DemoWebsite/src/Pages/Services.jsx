import React, { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Products from '../Components/Products'
import Cart from '../Components/Cart'
import ProductDetails from '../Components/ProductDetails';

function Services() {

    const [cart, setCart] = useState([]);

    // 🔹 Add / Increase Qty
    const updateCart = (newProduct) => {
        setCart(prev => {

            const existingProduct = prev.find(
                item => item.id === newProduct.id
            );

            if (existingProduct) {
                return prev.map(item =>
                    item.id === newProduct.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            } else {
                return [...prev, { ...newProduct, qty: 1 }];
            }
        });
    };

    // 🔹 Decrease Qty
    const decreaseQty = (id) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
                .filter(item => item.qty > 0)
        );
    };

    return (
        <>
            <div
                className="container-fluid d-flex flex-column justify-content-center align-items-center"
                style={{
                    backgroundColor: "#174736",
                    height: "80vh",
                }}
            >
                <h1 className="text-light mb-4">
                    Services
                </h1>

                <div className="col-12 d-flex justify-content-center gap-3 mt-4">
                    <Link
                        className="btn px-4"
                        style={{ backgroundColor: "#ffb703" }}
                        to="products"
                    >
                        Products
                    </Link>

                    <Link
                        className="btn px-4"
                        style={{ backgroundColor: "#ffb703" }}
                        to="cart"
                    >
                        Cart
                    </Link>
                </div>
            </div>

            <div className="container mt-5">
                <Routes>
                    <Route
                        path="products"
                        element={
                            <Products
                                updateCart={updateCart}
                            />
                        }
                    />
                    <Route
                        path="products/details/:id"
                        element={<ProductDetails />}
                    />
                    <Route
                        path="cart"
                        element={
                            <Cart
                                cart={cart}
                                updateCart={updateCart}
                                decreaseQty={decreaseQty}
                            />
                        }
                    />
                </Routes>
            </div>
        </>
    )
}

export default Services