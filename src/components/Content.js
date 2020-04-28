import React from 'react';
//Components
import Skills from './Content/Skills';
import Projects from './Content/Projects';
import About from './Content/About';
import Extra from './Content/Extra';
//
const Content = (props) => {
	if (props.current === 'Projects') {
		return (
			<div className="current-content">
				<Projects />
			</div>
		);
	}
	if (props.current === 'Skills') {
		return (
			<div className="current-content">
				<Skills />
			</div>
		);
	}
	if (props.current === 'About') {
		return (
			<div className="current-content">
				<About />
			</div>
		);
	}
	if (props.current === 'Extra') {
		return (
			<div className="current-content">
				<Extra />
			</div>
		);
	}
};

export default Content;
