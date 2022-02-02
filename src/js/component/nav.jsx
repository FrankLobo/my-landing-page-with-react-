import React from "react";
import PropTypes from "prop-types";

const Nav = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">
					{props.navName}
				</a>
				<button
					className="navbar-toggler text-white"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-white"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a
								className="nav-link active text-white"
								aria-current="page"
								href="#">
								{props.homeName}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.featuresName}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.pricingName}
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-white"
								href="#"
								tabindex="-1"
								aria-disabled="true">
								{props.disabledName}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Nav.proptypes = {
	navName: PropTypes.string,
	homeName: PropTypes.string,
	featuresName: PropTypes.string,
	pricingName: PropTypes.string,
	disabledName: PropTypes.string,
};

export default Nav;
