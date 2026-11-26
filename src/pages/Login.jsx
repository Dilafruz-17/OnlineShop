import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { user, login, register } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  if (user) return <Navigate to="/" replace />;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister && !form.name.trim()) {
      setError("Ismingizni kiriting.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("To‘g‘ri email kiriting.");
      return;
    }
    if (form.password.length < 6) {
      setError("Parol kamida 6 ta belgidan iborat bo‘lsin.");
      return;
    }

    const result = isRegister ? register(form) : login(form);

    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate("/");
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setError("");
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

        {error && <p className="form-error">{error}</p>}

        <button type="submit" className="btn btn-block">
          {isRegister ? "Ro‘yxatdan o‘tish" : "Kirish"}
        </button>
      </form>

      <p className="muted switch-mode" onClick={switchMode}>
        {isRegister
          ? "Hisobingiz bormi? Kirish"
          : "Hisobingiz yo‘qmi? Ro‘yxatdan o‘tish"}
      </p>
    </div>
  );
}