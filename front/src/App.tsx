import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages';
import Login from './Pages/User/Login';
import Join from './Pages/User/Join';
import Login2 from './Pages/User/Login2';
import Profile from './Pages/User/Profile';
import Play from './Pages/Play';
import Random from './Pages/Play/Random';
import Friends from './Pages/Play/Friends';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route
						path="/user"
						element={<Login to="/user/profile" />}
					/>
					<Route path="/user/join" element={<Join />} />
					<Route path="/user/profile" element={<Profile />} />
					<Route path="/play" element={<Play />} />
					<Route path="/play/friends" element={<Friends />} />
					<Route path="/play/random" element={<Random />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
