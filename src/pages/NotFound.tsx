import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
	<>
		<h1>404</h1>
		<Link to="/home">Go to Home</Link>
	</>
);

export default NotFound;
