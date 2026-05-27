import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
