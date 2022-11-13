import React, { useEffect, useState } from "react";
import UseApi from "../../HOOKS/UseApi";
import Logo from "./assets/logo.png";
import MenuItem from "./companents/MenuItem";
import Loading from "../LOADING/Loading";
import "./styles/header.css";
import { connect } from "react-redux";

const Header = (props) => {
	console.log("header props", props);
	const [categories, setCategories] = useState(null);

	const api = UseApi();
	console.log(categories);

	const catArr = [];

	useEffect(() => {
		api
			.get("shop/taxons")
			.then((res) => {
				console.log("shop/taxons RESPONSE", res.data);
				setCategories(res.data["hydra:member"]);
			})
			.catch((err) => console.log("shop/taxons ERR", err));
	}, []);

	const onClickLogOut = () => {
		api
			.get(" shop/authentication-token ")
			.then((res) => {
				console.log("res", res);
			})
			.catch((err) => {
				console.log("err", err);
			})
			.finally(() => {
				localStorage.removeItem("token");
				window.location.href = "/#";
				setTimeout(() => {
					window.location.reload();
				}, 111);
			});
	};

	if (categories === null) {
		return <Loading />;
	}

	categories?.map((item, index) => {
		catArr.push(
			<MenuItem key={index} name={item.name} id={item.id} code={item.code} />
		);
	});

	return (
		<React.Fragment>
			<div className="top-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-7 col-sm-6 hidden-xs">
							<p className="top-text">Flexible Delivery, Fast Delivery.</p>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
							<ul>
								<li>+180-123-4567</li>
								<li>info@demo.com</li>
								<li>
									<a href="/" className="headerHelp">
										Help
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="header-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-xs-8">
							<div className="logo">
								<a href="/">
									<img src={Logo} alt="" />{" "}
								</a>
							</div>
						</div>

						<div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
							<div className="search-bg">
								<input
									type="text"
									className="form-control"
									placeholder="Search Here"
								/>
								<button type="Submit">
									<i className="fa fa-search"></i>
								</button>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-3 col-xs-12">
							<div className="account-section">
								{props.TokenState.token ? (
									<ul>
										<li>
											<a href="/login" className="title hidden-xs">
												My Account
											</a>
										</li>

										<li>
											<button
												className="btn title hidden-xs btnLogOut"
												onClick={onClickLogOut}
											>
												Log Out
											</button>
										</li>
										<li>
											<a href="/cart" className="title">
												<i className="fa fa-shopping-cart"></i>{" "}
												<sup className="cart-quantity">
													{props.cartState ? props.cartState.itemsCount : 0}
												</sup>
											</a>
										</li>
									</ul>
								) : (
									<ul>
										<li>
											<a href="/login" className="title hidden-xs">
												Login
											</a>
										</li>

										<li>
											<a href="/register" className="title hidden-xs">
												Register
											</a>
										</li>
										<li>
											<a href="/cart" className="title">
												<i className="fa fa-shopping-cart"></i>{" "}
												<sup className="cart-quantity">
													{props.cartState ? props.cartState.itemsCount : 0}
												</sup>
											</a>
										</li>
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="navigation">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
								<div id="navigation" className="">
									<div id="menu-button">Menu</div>
									<ul style={{ display: "block" }}>
										<li className="active">
											<a href="/">Home</a>
										</li>
										{catArr}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps)(Header);
