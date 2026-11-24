import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h2>Mahsulot topilmadi</h2>
        <Link to="/" className="btn">Bosh sahifaga qaytish</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div>
      <Link to="/" className="muted">← Orqaga</Link>

      <div className="details" style={{ marginTop: 12 }}>
        <img src={product.image} alt={product.name} />

        <div>
          <p className="muted">{product.category}</p>
          <h2>{product.name}</h2>
          <p className="muted">
            ★ {product.rating} · {product.reviews} sharh
          </p>
         <span className="price">
  ${product.price}
  {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
</span>
          <p className="muted">{product.description}</p>

          <div className="actions">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="btn" onClick={handleAdd}>
              {added ? "Qo‘shildi ✓" : "Savatga qo‘shish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}