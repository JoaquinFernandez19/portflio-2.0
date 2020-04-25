import React from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
const ProjectItem = (props) => {
	const handleClick = (e) => {
		let tar = e.target;
		if (tar.classList.contains('img-project')) {
			tar.nextSibling.style.display = 'flex';
		}
	};
	const closeModal = (e) => {
		if (e.target.tagName === 'path') {
			e.target.parentNode.parentNode.style.display = 'none';
		}
		if (e.target.tagName === 'svg') {
			e.target.parentNode.style.display = 'none';
		}
	};

	return (
		<div className="project-card" onClick={handleClick}>
			<img src={props.img} alt="placeholder" className="img-project" />
			<div className="hidden animated fadeIn ">
				<FaRegWindowClose className="pr-icon" onClick={closeModal} />
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
