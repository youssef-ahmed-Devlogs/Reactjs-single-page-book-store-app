import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArabicBooks from "./components/ArabicBooks/ArabicBooks";
import CartProducts from "./components/CartProducts/CartProducts";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import EnglishBooks from "./components/EnglishBooks/EnglishBooks";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Router>
        {/* <Navbar /> */}
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart-products" component={CartProducts} />
          <Route path="/english-books" component={EnglishBooks} />
          <Route path="/arabic-books" component={ArabicBooks} />
          <Route path="/favorite-products" component={FavoritesPage} />
          <Route path="/search" exact component={Search} />
          <Route path="/books/:id" component={DetailsPage} />
        </Switch>
        <Footer />
      </Router>
    </ProductsProvider>
  );
}

export default App;
