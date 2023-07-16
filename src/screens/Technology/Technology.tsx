import React from 'react';
import info from '../../assets/info.json';
import './Technology.scss';

// Assets
import LaunchVehicleLandscape from './assets/launch-vehicle-landscape.jpg';
import LaunchVehiclePortrait from './assets/launch-vehicle-portrait.jpg';
import SpaceCapsuleLandscape from './assets/space-capsule-landscape.jpg';
import SpaceCapsulePortrait from './assets/space-capsule-portrait.jpg';
import SpaceportLandscape from './assets/spaceport-landscape.jpg';
import SpaceportPortrait from './assets/spaceport-portrait.jpg';

export default function Technology() {
	const {technology} = info;
	const [selected, setSelected] = React.useState<TechnologyType>('launch-vehicle');

	const photos = {
		'launch-vehicle': {
			landscape: LaunchVehicleLandscape,
			portrait: LaunchVehiclePortrait,
		},
		'space-capsule': {
			landscape: SpaceCapsuleLandscape,
			portrait: SpaceCapsulePortrait,
		},
		spaceport: {
			landscape: SpaceportLandscape,
			portrait: SpaceportPortrait,
		},
	};

	const getPhoto = (key: TechnologyType) => {
		if (window.innerWidth < 1130) return photos[key].landscape;
		else return photos[key].portrait;
	};

	return (
		<div className='technology page'>
			<div className='page__header'>
				<h5>03</h5>
				<h5>Space launch 101</h5>
			</div>
			<div className='page__content technology__content'>
				<img
					className='technology__content__photo'
					src={getPhoto(selected)}
					alt={selected.replace('-', ' ').toUpperCase()}></img>
				<ul className='technology__content__nav'>
					{Object.keys(technology).map((key, index) => (
						<li
							className={`technology__content__nav__item ${
								selected === key ? 'technology__content__nav__item--selected' : ''
							}`}
							onClick={() => setSelected(key as TechnologyType)}
							key={key}>
							{index + 1}
						</li>
					))}
				</ul>
				<div className='technology__content__info'>
					<p className='technology__content__info__subtitle'>The terminology...</p>
					<h3 className='technology__content__info__title'>
						{selected.replace('-', ' ').toUpperCase()}
					</h3>
					<p className='technology__content__info__description'>{technology[selected]}</p>
				</div>
			</div>
		</div>
	);
}
