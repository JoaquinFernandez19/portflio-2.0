import React from 'react';

const ProjectItem = (props) => {
	return (
		<div className="project-card">
			<img src={props.img} alt="placeholder" />
			<div className="hidden animated fadeIn ">
				<p>{props.description}</p>
				<div>
					<a href={props.github} target="blank">
						Code
					</a>
					<a href={props.website} target="blank">
						Website
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
