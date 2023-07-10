import React from 'react';
import './Home.scss';

export default function Home() {
	return (
		<div className='home page'>
			<div className='home__text'>
				<h5 className='home__text-1'>So, you want to travel to</h5>
				<h1 className='home__text-2'>Space</h1>
				<p className='home__text-3'>
					Let’s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and relax
					because we’ll give you a truly out of this world experience!
				</p>
			</div>
			<button className='home__button'>Explore</button>
		</div>
	);
}
