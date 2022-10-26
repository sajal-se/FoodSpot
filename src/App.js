import React, { useContext } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Customs components here
import Header from "./components/header/Header";
import Footer from "./components/Footer";
// Several pages import here
import Home from "./pages/home/Home";
import TodayMeal from "./pages/today'sMeal/TodayMeal";
import NewBooks from "./pages/newFood/NewFood";
import AddBook from "./pages/addFood/AddFood";
import About from "./pages/about/About";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/today-meal" element={<TodayMeal />} />
        <Route path="/new-food" element={<NewBooks />} />
        {/* <Route path="login" element={<Login />} />
        <Route path="admin" element={<RequireAuth><AdminNews /></RequireAuth>} /> */}
        <Route path="/add-food" element={<AddBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<About />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "2rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
