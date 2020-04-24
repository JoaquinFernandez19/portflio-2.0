import React from 'react';
//Icons
import { FaReact, FaBootstrap, FaCss3, FaGitSquare } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoHtml5 } from 'react-icons/io';
const Skills = () => {
	return (
		<div className="skills">
			<IoLogoJavascript className="icon" style={{ color: '#f7e018' }} />
			<IoLogoHtml5 className="icon" style={{ color: '#f25d36' }} />
			<FaCss3 className="icon" style={{ color: '#379ad6' }} />
			<FaReact className="icon" style={{ color: '#53c1de' }} />
			<FaBootstrap className="icon" style={{ color: '#553a7d' }} />
			<FaGitSquare className="icon" style={{ color: '#f34f29' }} />
		</div>
	);
};

export default Skills;
