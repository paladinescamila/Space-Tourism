import React from 'react';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import './styles/App.scss';
import Logo from './assets/logo.png';

// Screens
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Crew/Technology/Technology';

function App() {
	const activeStyle = ({isActive}: {isActive: boolean}) => ({
		borderBottomColor: isActive ? '#FFF' : 'transparent',
	});

	return (
		<BrowserRouter>
			<div className='App'>
				<nav className='header-container'>
					<img src={Logo} alt='logo' className='header-container__logo' />
					<ul className='header-container__links'>
						<li>
							<NavLink to='/' style={activeStyle}>
								<p>00</p>
								<p>Home</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/destination' style={activeStyle}>
								<p>01</p>
								<p>Destination</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/crew' style={activeStyle}>
								<p>02</p>
								<p>Crew</p>
							</NavLink>
						</li>
						<li>
							<NavLink to='/technology' style={activeStyle}>
								<p>03</p>
								<p>Technology</p>
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/destination' element={<Destination />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
