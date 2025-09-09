import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => (
	<>
		<div className="home-header">
			<Link to="/home">
				<img src="public/favicon.svg" className="icon" alt="Home" style={{ cursor: "pointer" }}/>
			</Link>
			<Link to="/home">
				<img src="src/assets/title-w.png" className="title invert-light" alt="TASKhroma logo" style={{ cursor: "pointer" }} />
			</Link>
		</div>
		<div className="home-content">
			<h2>Work in Progress...</h2>
		</div>
	</>
);

export default Home;
