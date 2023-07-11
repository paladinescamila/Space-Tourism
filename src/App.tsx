import React from 'react';
import {Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import './styles/App.scss';

// Assets
import Logo from './assets/logo.png';

// Screens
import Home from './screens/Home/Home';
import Destination from './screens/Destination/Destination';
import Crew from './screens/Crew/Crew';
import Technology from './screens/Technology/Technology';

function App() {
	const navigation = useLocation();
	const navigate = useNavigate();
	const availableRoutes = ['/destination', '/crew', '/technology'];

	const routeToName = (route: string) => {
		if (availableRoutes.includes(route)) return route.replace('/', '');
		else return 'home';
	};

	const selectedStyle = (route: string) => {
		let className = 'header__links__item';

		if (availableRoutes.includes(navigation.pathname)) {
			if (navigation.pathname === route) className += ' ' + className + '--selected';
		} else {
			if (route === '/') return (className += ' ' + className + '--selected');
		}

		return className;
	};

	return (
		<div className={`App ${routeToName(navigation.pathname)}-bg`}>
			<nav className='header'>
				<img src={Logo} alt='logo' className='header__logo' onClick={() => navigate('/')} />
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
