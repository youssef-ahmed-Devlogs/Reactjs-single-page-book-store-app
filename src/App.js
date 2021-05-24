import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArabicBooks from "./components/ArabicBooks/ArabicBooks";
import CartProducts from "./components/CartProducts/CartProducts";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import EnglishBooks from "./components/EnglishBooks/EnglishBooks";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart-products" component={CartProducts} />
          <Route path="/english-books" component={EnglishBooks} />
          <Route path="/arabic-books" component={ArabicBooks} />
          <Route path="/favorite-products" component={FavoritesPage} />
          <Route path="/books/:id" component={DetailsPage} />
        </Switch>
      </Router>
    </ProductsProvider>
  );
}

export default App;
