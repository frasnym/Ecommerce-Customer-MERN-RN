import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductsBySlug } from "../../actions";
import Layout from "../../components/Layout";
import "./style.css";

export default function ProductsListPage(props) {
	const product = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		const { match } = props;
		dispatch(getProductsBySlug(match.params.slug));
	}, [dispatch, props]);

	return (
		<Layout>
			{Object.keys(product.productsByPrice).map((key, index) => {
				return (
					<div className="card">
						<div className="cardHeader">
							<div>
								{props.match.params.slug} {key}
							</div>
							<button>Show all</button>
						</div>
						<div style={{ display: "flex" }}>
							{product.productsByPrice[key].map((product) => (
								<div className="productContainer">
									<div className="productImgContainer">
										<img
											src={product.images[0].full_url}
											alt={product.name}
										/>
									</div>
									<div className="productInfo">
										<div style={{ margin: "5px 0" }}>
											{product.name}
										</div>
										<div>
											<span>4.3</span>&nbsp;
											<span>123456</span>
										</div>
										<div className="productPrice">
											{product.price}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				);
			})}
			{/* <div className="card">
				<div className="cardHeader">
					<div>Samsung under20m</div>
					<button>Show all</button>
				</div>
				<div>
					<div className="productContainer">
						<div className="productImgContainer">
							<img
								src="http://localhost:3000//cG7Y5UZ7t-note10-1.jpg"
								alt="http://localhost:3000//cG7Y5UZ7t-note10-1.jpg"
							/>
						</div>
						<div className="productInfo">
							<div style={{ margin: "5px 0" }}>Name</div>
							<div>
								<span>4.3</span>&nbsp;
								<span>123456</span>
							</div>
							<div className="productPrice">Price</div>
						</div>
					</div>
				</div>
			</div> */}
		</Layout>
	);
}
