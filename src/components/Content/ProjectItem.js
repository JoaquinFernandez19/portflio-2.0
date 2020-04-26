import React from 'react';

const ProjectItem = (props) => {
	return (
		<div className="project-card">
			<div className="img-container">
				<img src={props.img} alt="placeholder" className="img-project" />
			</div>

			<div className="text-container">
				<p>{props.description}</p>
				<br />

				<p className="tech-names">{props.tech}</p>
			</div>

			<div className="links-container">
				<a href={props.github} target="blank">
					Code
				</a>
				<a href={props.website} target="blank">
					Website
				</a>
			</div>
		</div>
	);
};

export default ProjectItem;
