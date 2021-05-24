import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

function CartProduct({ product }) {
  const { cart, setCart, products, favorites, addToFavorites } =
    useContext(ProductsContext);

  let price = product.price - product.price * (product.discount / 100);
  let endPrice = price * product.amount;

  price = parseFloat(price).toFixed(2);
  endPrice = parseFloat(endPrice).toFixed(2);

  // remove product from cart
  const removeProduct = (id) => {
    let book = cart.filter((product) => product.id !== id);
    const allProducts = products.find((product) => product.id === id);
    const fromFav = favorites.find((product) => product.id === id);
    setCart([...book]);
    allProducts.inCart = false;
    allProducts.amount = 1;
    if (fromFav) {
      fromFav.inCart = false;
      fromFav.amount = 1;
    }
  };

  // increase amount
  const increaseAmount = (id) => {
    const books = cart.map((product) => {
      if (product.id === id) {
        product.amount++;
      }
      return product;
    });
    setCart([...books]);
  };

  // decreaseAmount amount
  const decreaseAmount = (id) => {
    const books = cart.map((product) => {
      if (product.id === id) {
        product.amount > 1 && product.amount--;
      }
      return product;
    });
    setCart([...books]);
  };

  const getFav = () => {
    const fav = favorites.find((book) => book.id === product.id);
    if (fav) {
      return fav.inFav;
    }
  };

  return (
    <div className="cartProduct">
      <div className="cartProduct-name">
        <div className="cartProduct-img">
          <img src={product.image} alt="cartProduct" />
        </div>
        <div className="cartProduct-name-info">
          <h3>{product.title}</h3>
          <div className="cartProduct-actions">
            <span
              className="add-to-fav"
              onClick={() => addToFavorites(product.id)}
            >
              {getFav() ? "ازالة من المفضلة" : "أضافة الى المفضلة"}
            </span>
            <span className="remove" onClick={() => removeProduct(product.id)}>
              حذف الكتاب
            </span>
          </div>
        </div>
      </div>
      <div className="cartProduct-price-info">
        <span className="cartProduct-price">${price}</span>
        <span className="cartProduct-price-actions">
          <div onClick={() => increaseAmount(product.id)}>+</div>
          <div>{product.amount}</div>
          <div onClick={() => decreaseAmount(product.id)}>-</div>
        </span>
        <span className="cartProduct-end-price">${endPrice}</span>
      </div>
    </div>
  );
}

export default CartProduct;
