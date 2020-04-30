import React from 'react';
import '../styles/Skills.scss';

import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-simple-icons/redux';

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
	return (
		<div className="skills">
			<div className="what-i-know">
				<h1>I speak</h1>
				<div className="techs">
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
						<Icon
							icon={reduxIcon}
							className="icon"
							style={{ color: '#764abc' }}
						/>

						<FaSass
							className="icon"
							style={{ color: '#ce679a' }}
							title="Sass logo"
						/>
					</div>
				</div>
			</div>
			<div className="my-tools">
				<h1>I use</h1>
				<div className="tools">
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
						<FaBootstrap
							className="icon"
							style={{ color: '#553a7d' }}
							title="Bootstrap logo"
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
			<div className="my-props">
				<h1>My priorities</h1>
				<div className="old-li">
					<p>
						Responsive <br />
						designs
					</p>
					<p>Accessibility</p>
					<p>
						Reusable <br />
						components
					</p>
					<p>
						Solid basic <br />
						knowledge
					</p>
					<p>
						Clean <br />
						code
					</p>
					<p>
						Browser <br />
						compatibility
					</p>
					<p>
						User <br />
						experience
					</p>
					<p>
						Beatiful <br />
						UI
					</p>
				</div>
			</div>
			<div className="what-i-can">
				<h1>Personal props</h1>
				<div className="old-li">
					<p>
						Good <br />
						communication
					</p>
					<p>
						English <br />
						fluency
					</p>
					<p>
						Hard <br />
						worker
					</p>

					<p>Passionate</p>
					<p>Proactive</p>
					<p>Responsible</p>
					<p>
						Very <br />
						curious
					</p>
					<p>
						Google search
						<br /> expert
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
