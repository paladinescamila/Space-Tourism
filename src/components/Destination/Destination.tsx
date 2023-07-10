import React, {useState} from 'react';
import './Destination.scss';
import info from '../../assets/info.json';

// Photos
import Moon from './assets/moon.png';
import Mars from './assets/mars.png';
import Europa from './assets/europa.png';
import Titan from './assets/titan.png';

export default function Destination() {
	const {destination} = info;
	const [selected, setSelected] = useState<'moon' | 'mars' | 'europa' | 'titan'>('moon');

	const images = {
		moon: Moon,
		mars: Mars,
		europa: Europa,
		titan: Titan,
	};

	return (
		<div className='destination page'>
			<div className='destination__header'>
				<h5>01</h5>
				<h5>Pick your destination</h5>
			</div>
			<div className='destination__subpage'>
				<img className={`destination__subpage__img--${selected}`} src={images[selected]} />
				<ul className='destination__subpage__nav'>
					{Object.keys(destination).map((key) => (
						<li
							className={`destination__subpage__nav__item${
								selected === key ? '--selected' : ''
							}`}
							onClick={() => setSelected(key as any)}>
							{key}
						</li>
					))}
				</ul>
				<div className='destination__subpage__info'>
					<h2 className='destination__subpage__info__title'>{selected}</h2>
					<p className='destination__subpage__info__description'>
						{destination[selected].description}
					</p>
					<div className='destination__subpage__info__other'>
						<div className='destination__subpage__info__other__distance'>
							<p>Avg. distance</p>
							<p>{destination[selected]['average-distance']}</p>
						</div>
						<div className='destination__subpage__info__other__travel'>
							<p>Est. travel time</p>
							<p>{destination[selected]['travel-time']}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
