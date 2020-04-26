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
				<span style={{ position: 'absolute', bottom: '0' }}>
					Rigth now i'm creating new stuff, so wait for more!
				</span>
			</div>
		);
	}
}

export default Projects;
