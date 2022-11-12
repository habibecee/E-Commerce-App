import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UseApi from "./HOOKS/UseApi";
import Header from "./COMPANENTS/HEADER/Header";
import Footer from "./COMPANENTS/FOOTER/Footer";
import Home from "./PAGES/HOME/Home";
import CategoryDetail from "./PAGES/CATEGORY/CategoryDetail";
import Login from "./PAGES/LOGIN/Login";
import Register from "./PAGES/REGISTER/Register";
import { connect } from "react-redux";
import ProductDetail from "./PAGES/ProductDetails";

const App = (props) => {
	const api = UseApi();

	api
		.get("shop/countries")
		.then((res) => {
			console.log("APP res", res);
		})
		.catch((err) => console.log("err", err));

	return (
		<React.Fragment>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/category">
						<Route path=":categoryCode" element={<CategoryDetail />} />
					</Route>
					<Route path="/product">
						<Route path=":productCode" element={<ProductDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</React.Fragment>
	);
};

const mapPropsToState = (state) => {
	console.log("APP STATE PROPS", state);

	return {
		...state,
	};
};

export default connect(mapPropsToState)(App);
