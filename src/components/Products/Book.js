import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { ProductsContext } from "../../context/ProductsContext";

function Book({ product }) {
  const { addToCart, addToFavorites, favorites } = useContext(ProductsContext);

  // price after discount
  let price = product.price - product.price * (product.discount / 100);
  price = parseFloat(price).toFixed(2);

  //
  const getFav = () => {
    const fav = favorites.find((book) => book.id === product.id);
    if (fav) {
      return fav.inFav;
    }
  };

  return (
    <div className="book">
      <div className="book-img">
        {product.discount > 0 && (
          <span className="book-discount">خصم {product.discount} %</span>
        )}
        <div className="book-desc">
          <Link to={`/books/${product.id}`}>
            <span className="details">تفاصيل</span>
          </Link>
          <div className="add-to-cart-btn">
            <div onClick={() => addToFavorites(product.id)}>
              <span
                className="icon-heart"
                style={{
                  color: getFav() ? "var(--redColor)" : "var(--whiteColor)",
                }}
              >
                <FeatherIcon icon="heart" size="30" />
              </span>
            </div>
            <button onClick={() => addToCart(product.id)}>
              {product.inCart ? "تم الاضافة الى العربة" : "أضف الى العربة"}
            </button>
          </div>
        </div>
        <img src={product.image} alt="book" />
      </div>
      <h2 className="book-title">{product.title}</h2>
      {product.discount > 0 && (
        <span className="book-old-price">${product.price}</span>
      )}
      <span className="book-price">${price} </span>
    </div>
  );
}

export default Book;
