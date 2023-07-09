import React from 'react';
import './Home.scss';

export default function Home() {
	return (
		<div className='home-container'>
			<div className='home-container__text'>
				<h5 className='home-container__text-1'>So, you want to travel to Space</h5>
				<h1 className='home-container__text-2'>Space</h1>
				<p className='home-container__text-3'>
					Let’s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and relax
					because we’ll give you a truly out of this world experience!
				</p>
			</div>
			<button className='home-container__button'>Explore</button>
		</div>
	);
}
