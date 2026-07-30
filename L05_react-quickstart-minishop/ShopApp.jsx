import { useState } from "react";

const products = [
  { id: 1, name: "Cabbage", price: "$1.50", isFruit: false, popular: false },
  { id: 2, name: "Garlic", price: "$2.00", isFruit: false, popular: true },
  { id: 3, name: "Apple", price: "$3.25", isFruit: true, popular: true },
  { id: 4, name: "Mango", price: "$4.00", isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  // Compute color based on product type
  const textColor = product.isFruit ? "magenta" : "darkgreen";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        width: "120px",
      }}
    >
      <h3>
        {product.name}
        {product.popular && " ⭐"}
      </h3>
      <p style={{ color: textColor, fontWeight: "bold" }}>{product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  // Shared state lived in the parent component
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const handleRemoveOne = () => {
    setCartCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Mini Fruit & Veg Stand</h1>

      <div style={{ marginBottom: "20px" }}>
        <span>
          {cartCount === 0 ? "Cart is empty" : `${cartCount} items in cart`}
        </span>

        {cartCount > 0 && (
          <button onClick={handleRemoveOne} style={{ marginLeft: "10px" }}>
            Remove one
          </button>
        )}
      </div>

      <div style={{ display: "flex", gap: "15px" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
