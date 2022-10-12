import React from "react";
import ReactDOM from "react-dom/client";
import { PokeApp } from "./components/PokeApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<PokeApp />
	</React.StrictMode>
);
