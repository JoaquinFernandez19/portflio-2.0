import React from 'react';
import '../styles/Projects.scss';
import ProjectItem from './ProjectItem';
//Json
import projects from '../data/projects.json';

class Projects extends React.Component {
	render() {
		let key = 0;
		let projectsList = projects.map((project) => {
			key++;
			return (
				<ProjectItem
					description={project.description}
					key={key}
					github={project.github}
					website={project.website}
					img={project.img}
					tech={project.tech}
				/>
			);
		});

		return (
			<div className="projects">
				{projectsList}

				<h1 style={{ paddingTop: '3em', paddingBottom: '3em' }}>
					And more to come...
				</h1>
			</div>
		);
	}
}

export default Projects;
