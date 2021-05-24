import React, { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import "./CartProducts.css";
import { ProductsContext } from "../../context/ProductsContext";

function CartProducts() {
  const { cart, setCart, products } = useContext(ProductsContext);
  const [total, setTotal] = useState(0);

  // Display cart products
  const displayCart = () => {
    const products = cart.map((product) => (
      <CartProduct key={product.id} product={product} cartTotal={cartTotal} />
    ));
    return products;
  };

  // get cart total
  const cartTotal = () => {
    let price = 0;
    cart.forEach((product) => {
      price +=
        (product.price - product.price * (product.discount / 100)) *
        product.amount;
    });

    let total = price;
    total = total.toFixed(2);

    setTotal(total);
  };

  // complete shopping
  const completeShopping = () => {
    setCart([]);

    products.forEach((product) => {
      product.inCart = false;
      product.amount = 1;
    });

    alert("تمت عملية الشراء");
  };

  useEffect(() => {
    cartTotal();
  }, [cart]);

  return (
    <section className="CartProducts section">
      <div className="container">
        <h2>عربة التسوق</h2>
        <div className="cart-header">
          <span className="book-name">اسم الكتاب</span>
          <span className="book-price">سعر الوحدة</span>
          <span className="book-amount">الكمية</span>
          <span className="book-end-price">المجموع الفرعى</span>
        </div>

        {
          // display cart
          displayCart()
        }

        {total > 0 ? (
          <div className="shopping-actions">
            <span>المجموع الكلى ${total}</span>
            <span className="complete-shopping" onClick={completeShopping}>
              أكمل الشراء
            </span>
          </div>
        ) : (
          <div className="cart-empty">
            <div>
              <img src="/images/products/cartEmpty.png" alt="cartEmpty" />
              <h4>لا يوجد منتجات فى عربة التسوق</h4>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartProducts;
