import React from "react";

const CartItem = (props) => {
	console.log("cart items props", props);

	return (
		<tr>
			<td>
				<a href="#">
					<img src="images/cart_product_1.png" alt="" />
				</a>
				<span>
					<a href="#"> {props.item?.productName} </a>
				</span>
			</td>
			<td>{props.item?.unitPrice}</td>
			<td>
				<div className="product-quantity">
					<div className="quantity">
						<input
							type="number"
							className="input-text qty text"
							step="1"
							min="1"
							max="6"
							name="quantity"
							value={props.item.quantity}
							title="Qty"
							size="4"
							pattern="[0-9]*"
						/>
					</div>
				</div>
			</td>
			<td>{props.item?.total}</td>
			<th scope="row">
				<a href="#" className="btn-close">
					<i className="fa fa-times-circle-o"></i>
				</a>
			</th>
		</tr>
	);
};

export default CartItem;
