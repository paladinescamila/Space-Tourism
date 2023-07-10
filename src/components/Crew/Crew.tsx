import React, {useState} from 'react';
import './Crew.scss';
import info from '../../assets/info.json';

// Photos
import DouglasHurley from './assets/douglas-hurley.png';
import MarkShuttleworth from './assets/mark-shuttleworth.png';
import VictorGlover from './assets/victor-glover.png';
import AnoushehAnsari from './assets/anousheh-ansari.png';

type CrewType = 'douglas-hurley' | 'mark-shuttleworth' | 'victor-glover' | 'anousheh-ansari';

export default function Crew() {
	const {crew} = info;
	const [selected, setSelected] = useState<CrewType>('douglas-hurley');

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
			<div className='crew__subpage'>
				<div className='crew__subpage__info'>
					<h4 className='crew__subpage__info__role'>
						{crew[selected].role.replace('-', ' ')}
					</h4>
					<h3 className='crew__subpage__info__name'>{selected.replace('-', ' ')}</h3>
					<p className='crew__subpage__info__description'>{crew[selected].description}</p>
				</div>
				<ul className='crew__subpage__nav'>
					{Object.keys(crew).map((key) => (
						<li
							className={`crew__subpage__nav__item${
								selected === key ? '--selected' : ''
							}`}
							onClick={() => setSelected(key as any)}></li>
					))}
				</ul>
				<img
					className='crew__subpage__img'
					src={photos[selected]}
					alt={selected.replace('-', ' ').toLocaleUpperCase()}
				/>
			</div>
		</div>
	);
}
