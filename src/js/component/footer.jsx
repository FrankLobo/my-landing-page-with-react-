import React from "react";
import PropTypes from "prop-types";
const Footer = (props) => {
	return (
		<footer className="footer mt-auto py-3 bg-dark">
			<div className="container py-5">
				<span className="text-muted d-flex justify-content-center">
					{props.copyright}
				</span>
			</div>
		</footer>
	);
};
Footer.prototype = {
	copyright: PropTypes.string,
};

export default Footer;

// <footer className="footer mt-auto py-3 bg-dark">
// 	<div className="container py-5">
// 		<span className="text-muted d-flex justify-content-center">
// 			Copyrigth@ My website 2022
// 		</span>
// 	</div>
// </footer>
