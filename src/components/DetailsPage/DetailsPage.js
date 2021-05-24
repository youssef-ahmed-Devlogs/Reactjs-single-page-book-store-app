import React, { useContext, useEffect } from "react";
import "./DetailsPage.css";
import { ProductsContext } from "../../context/ProductsContext";

function DetailsPage(props) {
  const { products, addToCart } = useContext(ProductsContext);

  const id = parseInt(props.match.params.id);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const displayProducts = () => {
    const book = products.find((product) => product.id === id);
    if (book) {
      return (
        <>
          <div className="DetailsPage-content">
            <div
              className="DetailsPage-img"
              onClick={() => (window.scrollTop = 0)}
            >
              <img src={book.image} alt="details" />
            </div>
            <div className="DetailsPage-info">
              <h2 className="title">{book.title}</h2>
              <h5 className="author">للكاتب : {book.author}</h5>
              <div className="book-information">
                <span className="page-count">عدد الصفحات : {book.pages}</span>
                <span className="book-date-of-publication">
                  تاريخ النشر : {book.year}
                </span>
                <span className="book-lang">لغة الكتاب : {book.lang}</span>
              </div>
              <div className="price">
                $
                {parseFloat(
                  book.price - book.price * (book.discount / 100)
                ).toFixed(2)}
                {book.discount ? (
                  <>
                    <span>بعد الخصم</span>
                    <span className="before-discount">${book.price}</span>
                  </>
                ) : (
                  ""
                )}
              </div>
              <button
                className="add-to-cart"
                onClick={() => addToCart(book.id)}
              >
                {book.inCart ? "تمت الاضافة الي العربة" : "أضف الى عربة التسوق"}
              </button>
            </div>
          </div>
          <div className="description">
            <h4>عن الكتاب : -</h4>
            <p>{book.description}</p>
          </div>
        </>
      );
    }
  };

  return (
    <section className="DetailsPage section">
      <div className="container">{displayProducts()}</div>
    </section>
  );
}

export default DetailsPage;
