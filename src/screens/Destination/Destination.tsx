import React from 'react';
import info from '../../assets/info.json';
import './Destination.scss';

// Assets
import Moon from './assets/moon.png';
import Mars from './assets/mars.png';
import Europa from './assets/europa.png';
import Titan from './assets/titan.png';

export default function Destination() {
	const {destination} = info;
	const [selected, setSelected] = React.useState<DestinationType>('moon');

	const photos = {
		moon: Moon,
		mars: Mars,
		europa: Europa,
		titan: Titan,
	};

	return (
		<div className='destination page'>
			<div className='page__header'>
				<h5>01</h5>
				<h5>Pick your destination</h5>
			</div>
			<div className='page__content destination__content'>
				<img
					className='destination__content__photo'
					src={photos[selected]}
					alt={selected.toUpperCase()}
				/>
				<ul className='destination__content__nav'>
					{Object.keys(destination).map((key) => (
						<li
							className={`destination__content__nav__item ${
								selected === key ? 'destination__content__nav__item--selected' : ''
							}`}
							onClick={() => setSelected(key as DestinationType)}
							key={key}>
							{key}
						</li>
					))}
				</ul>
				<div className='destination__content__info'>
					<h2 className='destination__content__info__title'>{selected}</h2>
					<p className='destination__content__info__description'>
						{destination[selected].description}
					</p>
					<div className='destination__content__info__other'>
						<div className='destination__content__info__other__distance'>
							<p>Avg. distance</p>
							<p>{destination[selected]['average-distance']}</p>
						</div>
						<div className='destination__content__info__other__travel'>
							<p>Est. travel time</p>
							<p>{destination[selected]['travel-time']}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
