import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const RoutesApp: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default RoutesApp;
