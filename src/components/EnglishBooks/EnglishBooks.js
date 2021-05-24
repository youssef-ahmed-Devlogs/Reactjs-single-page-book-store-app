import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Book from "../Products/Book";
import "../Products/Books.css";

function EnglishBooks() {
  const { products } = useContext(ProductsContext);

  const displayBooks = () => {
    const enBooks = products.filter((book) => book.lang === "en");
    const books = enBooks.map((book) => <Book key={book.id} product={book} />);
    return books;
  };

  return (
    <div className="books section">
      <div className="container">
        <h2 className="section-title">الكتب الأنجليزية</h2>
        <div className="books-content">{displayBooks()}</div>
      </div>
    </div>
  );
}

export default EnglishBooks;
