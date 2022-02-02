import React from "react";
import PropTypes from "prop-types";
const Jumbotron = (props) => {
	return (
		<div className="bg-light p-5 rounded mb-4 mw-25">
			<h1>{props.title}</h1>
			<p className="lead">{props.paragraph}</p>
			<a
				className="btn btn-lg btn-primary"
				href={props.buttonNavDocsUrl}
				role="button">
				{props.LabelUrlJumbo}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	title: PropTypes.string,
	Paragraph: PropTypes.string,
	ButtonNavDocsUrl: PropTypes.string,
	LabelUrlJumbo: PropTypes.string,
};
export default Jumbotron;

// <div className="bg-light p-5 rounded mb-4">
// 		<h1>Bottom Navbar example</h1>
// 		<p className="lead">
// 			{This example is a quick exercise to illustrate how the bottom
// 			navbar works.}
// 		</p>
// 		<a
// 			className="btn btn-lg btn-primary"
// 			href="/docs/5.0/components/navbar/"
// 			role="button">
// 			View navbar docs »
// 		</a>
// 	</div>
// );
