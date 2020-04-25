import React from 'react';
import './styles/Menu.scss';
//Icons
import {
	RiProjectorLine,
	RiTerminalBoxLine,
	RiBook2Line,
} from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';

//
class Menu extends React.Component {
	state = { mobile: null };

	handleClick = (e) => {
		const menu = document.querySelector('.menu');
		if (this.state.mobile || this.props.mobileState) {
			menu.style.display = 'none';
		}
		this.props.handleSelect(e.target.getAttribute('value'));
		

		//active class
		let current = e.target;
		let arrayParent = Array.from(e.target.parentNode.children);
		arrayParent.forEach((item)=>{
			if(item === current){
				item.classList.add('active');
			}
			if(item !== current) {
				item.classList.remove('active');
			}

		})
		

	};

	componentDidMount() {
		const menu = document.querySelector('.menu');
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 798) {
				menu.style.display = 'block';
				this.setState({ mobile: false });
			}
		});
		if (window.innerWidth <= 798) {
			this.setState({ mobile: true });
		}
	}

	render() {



		return (
			<div className="menu">
				<ul className="animated slideInDown">
					<div
						className='menu-item active'
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
