import React from 'react';

const ProjectItem = (props) => {
	return (
		<div className="project-card">
			<div className="img-container">
				<img src={props.img} alt="img of the project" className="img-project" />
			</div>

			<div className="text-container">
				<p>{props.description}</p>
				<br />

				<p className="tech-names">{props.tech}</p>
			</div>

			<div className="links-container">
				<a href={props.github} target="_blank" rel="noopener noreferrer">
					Code
				</a>
				<a href={props.website} target="_blank" rel="noopener noreferrer">
					Website
				</a>
			</div>
		</div>
	);
};

export default ProjectItem;
