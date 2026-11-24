import { useCart } from "../context/CartContext";
import products from "../data/products";
import ProductImage from "./ProductImage";

export default function CartItem({ item }) {
  const { changeQty, removeFromCart } = useCart();
  const product = products.find((p) => p.id === item.id) || item;

  return (
    <div className="cart-item">
      <ProductImage product={product} />

      <div className="info">
        <strong>{item.name}</strong>
        <p className="muted">${item.price}</p>
      </div>

      <div className="qty">
        <button onClick={() => changeQty(item.id, item.qty - 1)}>−</button>
        <span>{item.qty}</span>
        <button onClick={() => changeQty(item.id, item.qty + 1)}>+</button>
      </div>

      <strong style={{ minWidth: 70, textAlign: "right" }}>
        ${item.price * item.qty}
      </strong>

      <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
        O‘chirish
      </button>
    </div>
  );
}