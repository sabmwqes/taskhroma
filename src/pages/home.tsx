import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import titleImage from "../assets/title-w.png";
import logoImage from "../assets/logo.svg";

const Home: React.FC = () => (
	<>
		<div className="home-header">
			<Link to="/home">
				<img src={logoImage} className="icon" alt="Home" style={{ cursor: "pointer" }}/>
			</Link>
			<Link to="/home">
				<img src={titleImage} className="title invert-light" alt="TASKhroma logo" style={{ cursor: "pointer" }} />
			</Link>
		</div>
		<div className="home-content">
			<h2>Work in Progress...</h2>
		</div>
	</>
);

export default Home;
