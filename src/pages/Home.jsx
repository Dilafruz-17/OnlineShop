import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["Hammasi", ...new Set(products.map((p) => p.category))];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Hammasi");

  const filtered = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Hammasi" || p.category === category;
    return matchName && matchCategory;
  });

  return (
    <div>
      <section className="hero">
        <span className="hero-tag">Yangi mavsum</span>
        <h1>50% gacha chegirma</h1>
        <p>Eng yaxshi texnika va aksessuarlar qulay narxlarda. Bugun buyurtma bering.</p>
        <a href="#products" className="btn btn-light">Xarid qilish</a>
      </section>

      <div className="toolbar" id="products">
        <input
          className="input"
          placeholder="Mahsulot qidirish..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="chips">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${category === c ? "active" : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="section-head">
        <h2>Mahsulotlar</h2>
        <span className="muted">{filtered.length} ta mahsulot</span>
      </div>

      {filtered.length === 0 ? (
        <p className="muted">Hech narsa topilmadi.</p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}