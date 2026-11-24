import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-img">
       <ProductImage product={product} />
        {discount > 0 && <span className="sale-badge">-{discount}%</span>}
      </Link>

      <div className="card-body">
        <span className="card-cat">{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="muted">
          ★ {product.rating} · {product.reviews} sharh
        </p>

        <div className="card-bottom">
          <div>
            <span className="price">${product.price}</span>
            {product.oldPrice && (
              <span className="old-price">${product.oldPrice}</span>
            )}
          </div>
          <button className="btn" onClick={() => addToCart(product)}>
            Savatga
          </button>
        </div>
      </div>
    </div>
  );
}