import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const cards = [
	{
		image: "https://picsum.photos/id/96/4752/3168",
		title: "web",
		description: "diseño ux/ui",
	},
	{
		image: "https://picsum.photos/id/96/4752/3168",
		title: "Smarketing",
		description: "marketing",
	},
	{
		image: "https://picsum.photos/id/96/4752/3168",
		title: "cbr",
		description: "ciberseguridad",
	},
	{
		image: "https://picsum.photos/id/96/4752/3168",
		title: "Mando",
		description: "nivel de juego",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;