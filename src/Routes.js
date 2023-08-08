import React from "react";
import SignUp from "pages/SignUp";
import Cart from "pages/Cart";
import HomePage from "pages/HomePage";
import SignUpOne from "pages/SignUpOne";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signupone" element={<SignUpOne />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
