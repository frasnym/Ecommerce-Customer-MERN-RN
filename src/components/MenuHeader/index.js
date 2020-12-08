import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategories } from "../../actions";
import "./style.css";

export default function MenuHeader(props) {
	const category = useSelector((state) => state.categories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCategories());
	}, [dispatch]);

	const renderCategories = (categories) => {
		let myCategories = [];
		for (let category of categories) {
			myCategories.push(
				<li key={category._id}>
					{category.parentId ? (
						<a href={category.slug}>{category.name}</a>
					) : (
						<span>{category.name}</span>
					)}
					{category.children.length > 0 ? (
						<ul>{renderCategories(category.children)}</ul>
					) : null}
				</li>
			);
		}

		return myCategories;
	};
	return (
		<div className="menuHeader">
			<ul>
				{category.categories.length > 0
					? renderCategories(category.categories)
					: null}
			</ul>
		</div>
	);
}
