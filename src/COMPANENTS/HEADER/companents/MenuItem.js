import React from "react";

const MenuItem = (props) => {
	// const Temp = (
	// 	<ul style={{ display: "block" }}>
	// 		<li>
	// 			<a href="checkout.html">Checkout Form</a>
	// 		</li>
	// 		<li>
	// 			<a href="cart.html">Cart</a>{" "}
	// 		</li>
	// 		<li>
	// 			<a href="login-form.html">Login</a>{" "}
	// 		</li>
	// 		<li>
	// 			<a href="signup-form.html">Signup</a>{" "}
	// 		</li>
	// 		<li>
	// 			<a href="404-page.html">404-page</a>{" "}
	// 		</li>
	// 		<li>
	// 			<a href="styleguide.html">styleguide</a>{" "}
	// 		</li>
	// 	</ul>
	// );

	// console.log(Temp);

	return (
		<>
			{/* <li className="has-sub">  BU MENU ITEM'DAKİ OK İŞARETİ İÇİN!! */}
			<li className="active">
				<span className="submenu-button"></span>
				<a href={`/category/${props.code}`}>{props.name}</a>
				{/* {Temp} */}
			</li>
		</>
	);
};

export default MenuItem;
