import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

const DELIVERY = 5;

export default function Cart() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div>
        <h2>Savat bo‘sh</h2>
        <p className="muted">Hali hech narsa qo‘shmadingiz.</p>
        <Link to="/" className="btn">Xarid qilishni boshlash</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Savat</h2>

      <div className="layout">
        <div className="panel">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button
            className="btn btn-outline"
            style={{ marginTop: 12 }}
            onClick={clearCart}
          >
            Savatni tozalash
          </button>
        </div>

        <div className="panel">
          <h3>Buyurtma xulosasi</h3>
          <div className="summary-row">
            <span className="muted">Mahsulotlar</span>
            <span>${totalPrice}</span>
          </div>
          <div className="summary-row">
            <span className="muted">Yetkazish</span>
            <span>${DELIVERY}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Jami</span>
            <span>${totalPrice + DELIVERY}</span>
          </div>
          <button
            className="btn btn-block"
            onClick={() => navigate("/checkout")}
          >
            Buyurtma berish
          </button>
        </div>
      </div>
    </div>
  );
}