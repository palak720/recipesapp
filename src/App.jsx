import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import About from "./pages/About";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import { RecipeProvider } from "./context/RecipeContext";
import "./styles/global.css";

const App = () => {
  return (
    <RecipeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        </Routes>
        <Footer />
      </Router>
    </RecipeProvider>
  );
};

export default App;