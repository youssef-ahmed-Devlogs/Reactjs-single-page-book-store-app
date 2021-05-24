import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Book from "../Products/Book";
import "../Products/Books.css";

function FavoritesPage() {
  const { favorites } = useContext(ProductsContext);

  const displayBooks = () => {
    const books = favorites.map((book) => (
      <Book key={book.id} product={book} />
    ));
    return books;
  };

  return (
    <div className="books section">
      <div className="container">
        <h2 className="section-title">المفضلة</h2>
        <div className="books-content">{displayBooks()}</div>
      </div>
    </div>
  );
}

export default FavoritesPage;
