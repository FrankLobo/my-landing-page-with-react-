import React from "react";
import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<div className="container mb-5">
				<div className="row">
					<Jumbotron />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Home;
