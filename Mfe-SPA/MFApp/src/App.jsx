import React, { useState, useEffect, lazy, Suspense} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FoodList from "./components/FoodList.jsx";
import ItemList from "./components/ItemList.jsx";

import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <FoodList />
      <ItemList />
      <Footer />
    </>
  )
}

export default App;
