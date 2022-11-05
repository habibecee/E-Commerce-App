// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import UseApi from "./HOOKS/UseApi";
import Header from "./COMPANENTS/HEADER/Header";
import Footer from "./COMPANENTS/FOOTER/Footer";
import Home from "./PAGES/HOME/Home";
import Categories from "./PAGES/CATEGORY/Categories";
import CategoryDetail from "./PAGES/CATEGORY/CategoryDetail";

const App = (props) => {
	const api = UseApi();

	api
		.get("shop/countries")
		.then((res) => {
			console.log("res", res.data);
		})
		.catch((err) => console.log("err", err));

	return (
		<React.Fragment>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/category-details">
						<Route path=":slug" element={<CategoryDetail />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</React.Fragment>
	);
};

export default App;
