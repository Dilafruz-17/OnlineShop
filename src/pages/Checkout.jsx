import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const DELIVERY = 5;

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [payment, setPayment] = useState("Karta");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError("Barcha maydonlarni to‘ldiring.");
      return;
    }
    setOrderId(Math.floor(100000 + Math.random() * 900000));
    clearCart();
  };

  if (orderId) {
    return (
      <div className="panel auth-box" style={{ textAlign: "center" }}>
        <h2>Buyurtma qabul qilindi ✓</h2>
        <p className="muted">Buyurtma raqami: #{orderId}</p>
        <p className="muted">Tez orada siz bilan bog‘lanamiz.</p>
        <Link to="/" className="btn">Bosh sahifaga qaytish</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <h2>Savat bo‘sh</h2>
        <Link to="/" className="btn">Xarid qilishni boshlash</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Buyurtmani rasmiylashtirish</h2>

      <form className="layout" onSubmit={handleSubmit}>
        <div className="panel form">
          <h3>Yetkazib berish ma’lumotlari</h3>
          <div className="row">
            <input
              className="input"
              name="name"
              placeholder="Ism"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="input"
              name="phone"
              placeholder="Telefon"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <input
            className="input"
            name="address"
            placeholder="Manzil"
            value={form.address}
            onChange={handleChange}
          />

          <h3 style={{ marginTop: 8 }}>To‘lov usuli</h3>
          <div className="pay-options">
            {["Karta", "Naqd pul"].map((p) => (
              <button
                type="button"
                key={p}
                className={`pay-option ${payment === p ? "active" : ""}`}
                onClick={() => setPayment(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {error && <p style={{ color: "var(--danger)" }}>{error}</p>}
        </div>

        <div className="panel">
          <h3>Buyurtma xulosasi</h3>
          {items.map((i) => (
            <div className="summary-row" key={i.id}>
              <span className="muted">
                {i.name} × {i.qty}
              </span>
              <span>${i.price * i.qty}</span>
            </div>
          ))}
          <div className="summary-row">
            <span className="muted">Yetkazish</span>
            <span>${DELIVERY}</span>
          </div>
          <div className="summary-row summary-total">
            <span>Jami</span>
            <span>${totalPrice + DELIVERY}</span>
          </div>
          <button type="submit" className="btn btn-block">
            To‘lovni tasdiqlash
          </button>
        </div>
      </form>
    </div>
  );
}