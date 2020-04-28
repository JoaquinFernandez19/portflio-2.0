import React, { useState, useEffect } from 'react';
//Style
import './styles/App.scss';

//Components

import Menu from './Menu';
import Title from './Title';
import Content from './Content';
//
const App = () => {
	const [currentTab, setCurrentTab] = useState('Projects');
	const [mobileState, setMobileState] = useState('null');

	//

	const handleSelect = (selected) => {
		setCurrentTab(selected);
	};

	useEffect(() => {
		const menu = document.querySelector('.menu');
		const handleResize = () => {
			if (window.innerWidth <= 798) {
				menu.style.display = 'none';
				setMobileState(true);
			} else {
				menu.style.display = 'flex';
				setMobileState(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<div className="main-container">
			<Title />
			<Menu
				handleSelect={handleSelect}
				mobileState={mobileState}
				active={currentTab}
			/>
			<div className="current-tab-title">
				<h1>
					{currentTab}
					<span
						className="animated flash infinite"
						style={{
							zIndex: '1',
						}}>
						|
					</span>
				</h1>
			</div>
			<Content current={currentTab} />
		</div>
	);
};

export default App;
