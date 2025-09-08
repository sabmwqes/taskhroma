import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
	<div style={{ textAlign: "center", marginTop: "20%" }}>
		<h1>404</h1>
		<h3>Page Not Found</h3>
		<br/>

		<Link to="/home">Go to Home</Link>
	</div>
);

export default NotFound;
