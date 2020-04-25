import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
const Title = () => {
	return (
		<div className="title">
			<h1>Hello</h1>
			<p>
				Im <span>Joaquin</span>
			</p>
			<RiMenu2Line
				style={{ position: 'absolute', left: '0', fontSize: '3rem' }}
				className="hamburguer-icon"
				onClick={() => {
					let menu = document.querySelector('.menu');
					if (menu.style.display === 'block') {
						menu.style.display = 'none';
					} else {
						menu.style.display = 'block';
					}
				}}
			/>
		</div>
	);
};

export default Title;
