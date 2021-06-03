import React from 'react';
import "./App.css";
import CalenderComp from "./comp/CalenderComp";
import HeaderComp from "./comp/HeaderComp";

const App = () => {
	return (
		<div className="app">
			<h1>App</h1>

			<HeaderComp />
			<CalenderComp />
		</div>
	)
}

export default App