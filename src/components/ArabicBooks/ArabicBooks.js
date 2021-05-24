import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Book from "../Products/Book";
import "../Products/Books.css";

function ArabicBooks() {
  const { products } = useContext(ProductsContext);

  const displayBooks = () => {
    const arBooks = products.filter((book) => book.lang === "ar");
    const books = arBooks.map((book) => <Book key={book.id} product={book} />);
    return books;
  };

  return (
    <div className="books section">
      <div className="container">
        <h2 className="section-title">الكتب العربية</h2>
        <div className="books-content">{displayBooks()}</div>
      </div>
    </div>
  );
}

export default ArabicBooks;
