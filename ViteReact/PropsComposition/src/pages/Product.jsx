import React from "react";

export default function Product() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Smart Watch", price: 5000 },
    { id: 5, name: "Keyboard", price: 1500 },
  ];

  return (
    <>
      <h1>Our Products</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
        </div>
      ))}
    </>
  );
}
