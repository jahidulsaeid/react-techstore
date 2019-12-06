import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import Default from "./pages/Default";
// Components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";

function App() {
  return (
    <>
      {/* navbar, sidebar, cart, footer */}
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/Products" exact component={Products} />
        <Route path="/product/:id" exact component={SingleProductPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/" component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
