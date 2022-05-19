import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages';
import Login from './Pages/User';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/user" element={<Login />} />
				</Routes>
			</Router>
			<Main />
		</>
	);
}

export default App;
