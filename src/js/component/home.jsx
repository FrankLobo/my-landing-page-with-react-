import React from "react";
import Nav from "./nav.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
// import image from "/dog1.png";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Nav
				navName="Navbar"
				homeName="Home"
				featuresName="Features"
				pricingName="Pricing"
				disabledName="Disabled"
			/>
			<div className="container mb-5">
				<div className="row">
					<Jumbotron
						title="Bottom Navbar example"
						paragraph="This example is a quick exercise to illustrate how the bottom navbar works."
						buttonNavDocsUrl="/docs/5.0/components/navbar/"
						LabelUrlJumbo="View navbar docs »"
					/>
					<Card
						image="/dog1.png"
						titleCard="Wolfy"
						textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttonLink="#"
						LabelUrl="Go somewhere"
					/>
					<Card
						image="/dog1.png"
						imgUrl="../../img/dog 1.png"
						titleCard="Wolfy"
						textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttonLink="#"
						LabelUrl="Go somewhere"
					/>
					<Card
						image="/dog1.png"
						imgUrl="../../img/dog 1.png"
						titleCard="Wolfy"
						textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttonLink="#"
						LabelUrl="Go somewhere"
					/>
					<Card
						image="/dog1.png"
						imgUrl="../../img/dog 1.png"
						titleCard="Wolfy"
						textCard="Some quick example text to build on the card title and make up the bulk of the card's content."
						buttonLink="#"
						LabelUrl="Go somewhere"
					/>
				</div>
			</div>
			<Footer copyright="Copyrigth@ My website 2022" />
		</div>
	);
};

export default Home;
