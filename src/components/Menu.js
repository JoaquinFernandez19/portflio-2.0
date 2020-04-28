import React, { useState, useEffect } from 'react';
import './styles/Menu.scss';
//Icons
import {
	RiProjectorLine,
	RiTerminalBoxLine,
	RiBook2Line,
} from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';

//
const Menu = (props) => {
	const [mobile, setMobile] = useState('false');

	useEffect(() => {
		if (props.mobileState === true) {
			setMobile(true);
			console.log('mobile state ON!');
		} else {
			setMobile(false);
			console.log('mobile state Off!');
		}
	}, [props.mobileState]);

	const handleClick = (e) => {
		let menu = document.querySelector('.menu');

		if (props.mobileState) {
			menu.style.display = 'none';
			console.log('hola');
		}
		props.handleSelect(e.target.getAttribute('value'));

		//active class
		let current = e.target;
		let arrayParent = Array.from(e.target.parentNode.children);
		arrayParent.forEach((item) => {
			if (item === current) {
				item.classList.add('active');
			}
			if (item !== current) {
				item.classList.remove('active');
			}
		});
	};

	return (
		<div className="menu">
			<ul className="animated slideInDown">
				<div
					className="menu-item active"
					value="Projects"
					onClick={handleClick}>
					<RiProjectorLine className="menu-icon" />
					<li>Projects</li>
				</div>
				<div className="menu-item" value="Skills" onClick={handleClick}>
					<RiTerminalBoxLine className="menu-icon" />
					<li>Skills</li>
				</div>
				<div className="menu-item" value="About" onClick={handleClick}>
					<RiBook2Line className="menu-icon" />
					<li>About</li>
				</div>
				<div className="menu-item" value="Extra" onClick={handleClick}>
					<AiOutlineStar className="menu-icon" />
					<li>Extra</li>
				</div>
			</ul>
		</div>
	);
};

export default Menu;
