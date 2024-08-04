import React from "react";

import Detail from "./detail.jsx";
import Front from "./front";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Front />} />
				<Route path="/detail" element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
