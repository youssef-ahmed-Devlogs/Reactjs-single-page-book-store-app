import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import "./Navbar.css";
import { ProductsContext } from "../../context/ProductsContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [darkTheme, setDarkTheme] = useState(false);

  const handelOpen = () => setOpen(!open);

  const closeNavMenu = () => setOpen(false);

  const { cart, favorites } = useContext(ProductsContext);

  // item in fav count
  const favCount = () => {
    const count = favorites.filter((book) => book.inFav);
    return count.length;
  };

  // set mode
  const setTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleTheme = () => {
    if (darkTheme) {
      document.documentElement.style.setProperty("--darkColor", "#fff");
      document.documentElement.style.setProperty(
        "--light-darkColor",
        "#fafafc"
      );
      document.documentElement.style.setProperty("--whiteColor", "#20232a");
      document.documentElement.style.setProperty("--grayColor", "#282c34");
    } else {
      document.documentElement.style.setProperty("--darkColor", "#20232a");
      document.documentElement.style.setProperty(
        "--light-darkColor",
        "#282c34"
      );
      document.documentElement.style.setProperty("--whiteColor", "#fff");
      document.documentElement.style.setProperty("--grayColor", "#fafafc");
    }
  };

  useEffect(() => {
    setDarkTheme(
      localStorage.getItem("darkTheme") &&
        JSON.parse(localStorage.getItem("darkTheme"))
    );
    toggleTheme();
  }, []);

  useEffect(() => {
    toggleTheme();
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);

  return (
    <nav>
      {/* Navbar top */}
      <div className="navbar-top">
        <div className="container">
          <div className="navbar-top-content">
            <Link to="/" className="logo" onClick={handelOpen}>
              <span className="logo-icon">
                <FeatherIcon icon="bookmark" size="50" />
              </span>
              <span className="logo-title">كــتـــابــى</span>
            </Link>
            <form>
              <input type="text" placeholder="ابحث عن كتابك..." />
              <button type="submit">
                <span className="icon-search">
                  <FeatherIcon icon="search" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Navbar bottom */}
      <div className="navbar-bottom">
        <div className="container">
          <div className="navbar-bottom-content">
            <button className="hamburger-btn" onClick={handelOpen}>
              <FeatherIcon icon={open ? "x-square" : "menu"} size="30" />
            </button>
            <ul className={open ? "navbar-list open" : "navbar-list"}>
              <li className="navbar-item">
                <NavLink
                  to="/"
                  exact
                  className="navbar-link"
                  onClick={closeNavMenu}
                >
                  الصفحة الرئيسية
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/english-books"
                  exact
                  className="navbar-link"
                  onClick={closeNavMenu}
                >
                  الكتب الانجليزية
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/arabic-books"
                  exact
                  className="navbar-link"
                  onClick={closeNavMenu}
                >
                  الكتب العربية
                </NavLink>
              </li>
            </ul>
            <div className="navbar-products-actions">
              <span className="icon-moon icon" onClick={setTheme}>
                <FeatherIcon icon={darkTheme ? "sun" : "moon"} size="30" />
              </span>
              <Link
                to="/favorite-products"
                className="favorite-products"
                onClick={closeNavMenu}
              >
                <span className="favorite-count">{favCount()}</span>
                <span className="icon-heart icon">
                  <FeatherIcon icon="heart" size="30" />
                </span>
              </Link>
              <Link
                to="/cart-products"
                className="cart-products"
                onClick={closeNavMenu}
              >
                <span className="cart-count">{cart.length}</span>
                <span className="icon-shopping-cart icon">
                  <FeatherIcon icon="shopping-cart" size="30" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
