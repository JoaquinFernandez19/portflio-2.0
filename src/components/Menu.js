import React from 'react';
//Icons
import {
	RiProjectorLine,
	RiTerminalBoxLine,
	RiBook2Line,
} from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';

//
class Menu extends React.Component {
	handleClick = (e) => {
		this.props.handleSelect(e.target.getAttribute('value'));
		//mobile menu
		if (this.props.mobileState) {
			const menu = document.querySelector('.menu');
			menu.style.display = 'none';
		}
	};

	componentDidMount() {
		const menu = document.querySelector('.menu');
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 798) {
				menu.style.display = 'block';
			}
		});
	}

	render() {
		return (
			<div className="menu">
				<ul className="animated slideInLeft">
					<div
						className="menu-item"
						value="Projects"
						onClick={this.handleClick}>
						<RiProjectorLine className="menu-icon" />
						<li>Projects</li>
					</div>
					<div className="menu-item" value="Skills" onClick={this.handleClick}>
						<RiTerminalBoxLine className="menu-icon" />
						<li>Skills</li>
					</div>
					<div className="menu-item" value="About" onClick={this.handleClick}>
						<RiBook2Line className="menu-icon" />
						<li>About</li>
					</div>
					<div className="menu-item" value="Extra" onClick={this.handleClick}>
						<AiOutlineStar className="menu-icon" />
						<li>Extra</li>
					</div>
				</ul>
			</div>
		);
	}
}

export default Menu;
