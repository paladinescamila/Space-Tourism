import React from 'react';
import {Route, Routes, Link, useLocation} from 'react-router-dom';
import './styles/App.scss';
import Logo from './assets/logo.png';

// Screens
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

function App() {
	const navigation = useLocation();
	const availableRoutes = ['/destination', '/crew', '/technology'];

	const selectedStyle = (route: string) => {
		if (availableRoutes.includes(navigation.pathname)) {
			if (navigation.pathname === route) return 'header__links--selected';
			else return 'header__links--unselected';
		} else {
			if (route === '/') return 'header__links--selected';
			else return 'header__links--unselected';
		}
	};

	const routeToName = (route: string) => {
		if (availableRoutes.includes(route)) return route.replace('/', '');
		else return 'home';
	};

	return (
		<div className={`App ${routeToName(navigation.pathname)}-bg`}>
			<nav className='header'>
				<img src={Logo} alt='logo' className='header__logo' />
				<ul className='header__links'>
					<li>
						<Link to='/' className={selectedStyle('/')}>
							<p>00</p>
							<p>Home</p>
						</Link>
					</li>
					<li>
						<Link to='/destination' className={selectedStyle('/destination')}>
							<p>01</p>
							<p>Destination</p>
						</Link>
					</li>
					<li>
						<Link to='/crew' className={selectedStyle('/crew')}>
							<p>02</p>
							<p>Crew</p>
						</Link>
					</li>
					<li>
						<Link to='/technology' className={selectedStyle('/technology')}>
							<p>03</p>
							<p>Technology</p>
						</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destination' element={<Destination />} />
				<Route path='/crew' element={<Crew />} />
				<Route path='/technology' element={<Technology />} />
				<Route path='*' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
