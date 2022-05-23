import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages';
import Login from './Pages/User/Login';
import Profile from './Pages/User/Profile';
import Play from './Pages/Play';
import Random from './Pages/Play/Random';
import Friends from './Pages/Play/Friends';
import Join from './Pages/User/Join';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/user" element={<Login />} />
					<Route path="/user/profile" element={<Profile />} />
					<Route path="/play" element={<Play />} />
					<Route path="/play/friends" element={<Friends />} />
					<Route path="/play/random" element={<Random />} />
					<Route path="/user/join" element={<Join />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
