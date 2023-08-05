import React from 'react';
import {Route, Routes, Link, useLocation, useNavigate} from 'react-router-dom';
import './styles/App.scss';

// Assets
import Logo from './assets/logo.png';
import MenuIcon from './assets/menu.svg';
import CloseIcon from './assets/close.svg';

// Screens
import Home from './screens/Home/Home';
import Destination from './screens/Destination/Destination';
import Crew from './screens/Crew/Crew';
import Technology from './screens/Technology/Technology';

function App() {
	const navigation = useLocation();
	const navigate = useNavigate();
	const availableRoutes = ['/destination', '/crew', '/technology'];

	const links = [
		{number: '00', title: 'Home', path: '/'},
		{number: '01', title: 'Destination', path: '/destination'},
		{number: '02', title: 'Crew', path: '/crew'},
		{number: '03', title: 'Technology', path: '/technology'},
	];

	const [displayMenu, setDisplayMenu] = React.useState(false);
	const toggleMenu = () => setDisplayMenu(!displayMenu);
	const closeMenu = () => setDisplayMenu(false);

	const routeToName = (route: string) => {
		if (availableRoutes.includes(route)) return route.replace('/', '');
		else return 'home';
	};

	const selectedStyle = (route: string) => {
		if (availableRoutes.includes(navigation.pathname)) {
			if (navigation.pathname === route) return '--selected';
		} else if (route === '/') return '--selected';

		return '';
	};

	return (
		<div className={`App ${routeToName(navigation.pathname)}-bg`}>
			<nav className='header'>
				<img src={Logo} alt='logo' className='header__logo' onClick={() => navigate('/')} />
				<ul className='header__links'>
					{links.map((link, index) => (
						<li key={index}>
							<Link
								to={link.path}
								className={`header__links__item 
									header__links__item${selectedStyle(link.path)}`}>
								<p>{link.number}</p>
								<p>{link.title}</p>
							</Link>
						</li>
					))}
				</ul>
				<img src={MenuIcon} alt='Menu' className='header__menu-icon' onClick={toggleMenu} />
			</nav>
			<nav className={`mobile-menu mobile-menu--${displayMenu ? 'opened' : 'closed'}`}>
				<img src={CloseIcon} alt='Close' className='mobile-menu__close-icon' onClick={closeMenu} />
				<ul className='mobile-menu__links'>
					{links.map((link, index) => (
						<li key={index} onClick={closeMenu}>
							<Link
								to={link.path}
								className={`mobile-menu__links__item
									mobile-menu__links__item${selectedStyle(link.path)}`}>
								<p>{link.number}</p>
								<p>{link.title}</p>
							</Link>
						</li>
					))}
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
