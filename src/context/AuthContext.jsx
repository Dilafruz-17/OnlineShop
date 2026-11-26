import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const USERS_KEY = "users";
const USER_KEY = "currentUser";

const read = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read(USER_KEY, null));

  const saveCurrent = (u) => {
    localStorage.setItem(USER_KEY, JSON.stringify(u));
    setUser(u);
  };

  const register = ({ name, email, password }) => {
    const users = read(USERS_KEY, []);
    const mail = email.trim().toLowerCase();

    if (users.some((u) => u.email === mail)) {
      return { ok: false, error: "Bu email allaqachon ro‘yxatdan o‘tgan." };
    }

    users.push({ name: name.trim(), email: mail, password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    saveCurrent({ name: name.trim(), email: mail });
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const users = read(USERS_KEY, []);
    const mail = email.trim().toLowerCase();
    const found = users.find((u) => u.email === mail && u.password === password);

    if (!found) {
      return { ok: false, error: "Email yoki parol noto‘g‘ri." };
    }

    saveCurrent({ name: found.name, email: found.email });
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem(USER_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}