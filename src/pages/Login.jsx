import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setError("To‘g‘ri email kiriting.");
      return;
    }
    if (form.password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo‘lsin.");
      return;
    }
    if (isRegister && !form.name.trim()) {
      setError("Ismingizni kiriting.");
      return;
    }
    navigate("/");
  };

  return (
    <div className="panel auth-box">
      <h2>{isRegister ? "Ro‘yxatdan o‘tish" : "Hisobga kirish"}</h2>

      <form className="form" onSubmit={handleSubmit}>
        {isRegister && (
          <input
            className="input"
            name="name"
            placeholder="Ism"
            value={form.name}
            onChange={handleChange}
          />
        )}
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="input"
          name="password"
          type="password"
          placeholder="Parol"
          value={form.password}
          onChange={handleChange}
        />

        {error && <p style={{ color: "var(--danger)", margin: 0 }}>{error}</p>}

        <button type="submit" className="btn">
          {isRegister ? "Ro‘yxatdan o‘tish" : "Kirish"}
        </button>
      </form>

      <p
        className="muted"
        style={{ textAlign: "center", marginTop: 12, cursor: "pointer" }}
        onClick={() => setIsRegister(!isRegister)}
      >
        {isRegister ? "Hisobingiz bormi? Kirish" : "Hisobingiz yo‘qmi? Ro‘yxatdan o‘tish"}
      </p>
    </div>
  );
}