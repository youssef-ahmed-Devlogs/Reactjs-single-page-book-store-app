import React, { useContext } from "react";
import "./Books.css";
import Book from "./Book";
import { ProductsContext } from "../../context/ProductsContext";

function Books() {
  const { products } = useContext(ProductsContext);

  const displayProducts = () => {
    const booksProducts = products.map((product) => (
      <Book key={product.id} product={product} />
    ));

    return booksProducts;
  };

  return (
    <div className="books">
      <div className="container">
        <div className="books-content">{displayProducts()}</div>
      </div>
    </div>
  );
}

export default Books;
