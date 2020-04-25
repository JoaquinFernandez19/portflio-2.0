import React from 'react';
import './styles/Skills.scss';
//Icons

import {
	FaReact,
	FaBootstrap,
	FaCss3,
	FaGitSquare,
	FaSass,
} from 'react-icons/fa';
import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io';
import { DiVisualstudio, DiNpm } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { AiFillCode } from 'react-icons/ai';

///
const Skills = () => {
	const showAnything = (e) => {
		let anything = document.querySelector('.anything');
		let what = e.target;
		what.classList.remove('beat', 'infinite');
		what.classList.add('fadeOut');
		what.addEventListener('animationend', () => {
			what.style.display = 'none';
			anything.style.display = 'block';
			anything.classList.add('animated', 'fadeIn');
		});
	};

	return (
		<div className="skills">
			<div className="what-i-know">
				<h1>I know</h1>
				<div className="techs">
					<h2>Tecnologies</h2>
					<div className="icons-container">
						<IoLogoJavascript
							className="icon"
							style={{ color: '#f7e018' }}
							title="Javascript Logo"
						/>
						<IoLogoHtml5
							className="icon"
							style={{ color: '#f25d36' }}
							title="Html5 logo"
						/>
						<FaCss3
							className="icon"
							style={{ color: '#379ad6' }}
							title="Css3 logo"
						/>
						<FaReact
							className="icon"
							style={{ color: '#53c1de' }}
							title="React logo"
						/>
						<FaBootstrap
							className="icon"
							style={{ color: '#553a7d' }}
							title="Bootstrap logo"
						/>
						<FaSass
							className="icon"
							style={{ color: '#ce679a' }}
							title="Sass logo"
						/>
					</div>
				</div>
				<div className="tools">
					<h2>Tools</h2>
					<div className="icons-container">
						<FaGitSquare
							className="icon"
							style={{ color: '#f34f29' }}
							title="Git logo"
						/>
						<AiFillCode className="icon" title="Console logo" />
						<FiFigma
							className="icon"
							style={{ color: '#00000' }}
							title="Figma logo"
						/>
						<DiNpm
							className="icon"
							style={{ color: '#dd2d35' }}
							title="Node package manager logo"
						/>
						<DiVisualstudio
							className="icon"
							style={{ color: '#652077' }}
							title="Visual studio logo"
						/>
					</div>
				</div>
			</div>
			<div className="learn-anything">
				<div
					onClick={(e) => {
						showAnything(e);
					}}>
					<h1>
						What can i learn?
						<br />a click will tell
					</h1>
					<p className="anything">
						Anything <br />
						<span style={{ fontSize: '0.5em' }}>with a lot of effort :)</span>
					</p>
				</div>
			</div>
			<div className="what-i-can">
				<h1>My priorities</h1>
				<ul className="prio-ul">
					<li>Responsive designs</li>
					<li>Accessibility</li>
					<li>Reusable components</li>
					<li>Solid basic knowledge</li>
					<li>Clean code</li>
					<li>Browser compatibility</li>
					<li>User experience</li>
					<li>Beatiful UI</li>
				</ul>
				<h1>Personal props</h1>
				<ul>
					<li>Good comunication</li>
					<li>English fluency</li>
					<li>Hard worker</li>
					<li>Very passionate</li>
					<li>Responsable and respectful</li>
					<li>Very curious</li>
				</ul>
			</div>
		</div>
	);
};

export default Skills;
