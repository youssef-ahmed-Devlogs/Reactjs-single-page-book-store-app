import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Book from "../Products/Book";
import "./Search.css";

function Search() {
  const { products, searchTerm } = useContext(ProductsContext);

  const handelSearch = () => {
    const filterProducts = products.filter((book) => {
      const title = book.title.toLowerCase().trim();
      const term = searchTerm.toLowerCase().trim();

      if (searchTerm === "") {
        return "";
      } else if (title.includes(term)) {
        return book;
      }
      return "";
    });

    if (filterProducts.length) {
      const books = filterProducts.map((book) => (
        <Book key={book.id} product={book} />
      ));
      return books;
    } else {
      return <p className="no-search">لا يوجد نتائج بحث عن "{searchTerm}"</p>;
    }
  };

  return (
    <div className="books section">
      <div className="container">
        <h2 className="search-result-head">نتائج البحث عن "{searchTerm}"</h2>
        <div className="books-content">{handelSearch()}</div>
      </div>
    </div>
  );
}

export default Search;
