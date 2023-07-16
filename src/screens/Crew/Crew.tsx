import React from 'react';
import info from '../../assets/info.json';
import './Crew.scss';

// Assets
import DouglasHurley from './assets/douglas-hurley.png';
import MarkShuttleworth from './assets/mark-shuttleworth.png';
import VictorGlover from './assets/victor-glover.png';
import AnoushehAnsari from './assets/anousheh-ansari.png';

export default function Crew() {
	const {crew} = info;
	const [selected, setSelected] = React.useState<CrewType>('douglas-hurley');

	const photos = {
		'douglas-hurley': DouglasHurley,
		'mark-shuttleworth': MarkShuttleworth,
		'victor-glover': VictorGlover,
		'anousheh-ansari': AnoushehAnsari,
	};

	return (
		<div className='crew page'>
			<div className='page__header'>
				<h5>02</h5>
				<h5>Meet your crew</h5>
			</div>
			<div className='page__content crew__content'>
				<img
					className='crew__content__photo'
					src={photos[selected]}
					alt={selected.replace('-', ' ').toUpperCase()}
				/>
				<ul className='crew__content__nav'>
					{Object.keys(crew).map((key) => (
						<li
							className={`crew__content__nav__item ${
								selected === key ? 'crew__content__nav__item--selected' : ''
							}`}
							onClick={() => setSelected(key as any)}
							key={key}></li>
					))}
				</ul>
				<div className='crew__content__info'>
					<h4 className='crew__content__info__role'>
						{crew[selected].role.replace('-', ' ')}
					</h4>
					<h3 className='crew__content__info__name'>{selected.replace('-', ' ')}</h3>
					<p className='crew__content__info__description'>{crew[selected].description}</p>
				</div>
			</div>
		</div>
	);
}
