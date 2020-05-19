import React from 'react';
import '../styles/Extra.scss';
//icons
import { AiOutlineFilePdf } from 'react-icons/ai';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiCoffee } from 'react-icons/fi';

const Extra = () => {
	return (
		<div className="extra">
			<div className="div-files-and-contact">
				<div className="files">
					<h1>Files</h1>
					<div className="files-icons">
						<div className="file-plus-name">
							<a href="https://github.com/JoaquinFernandez19/portflio-2.0/raw/master/src/components/data/joaquin-resume.pdf">
								<AiOutlineFilePdf className="file-icon" />
							</a>
							<p>Resume</p>
						</div>
						<div className="file-plus-name">
							<a href="https://github.com/JoaquinFernandez19/portflio-2.0/raw/master/src/components/data/R%C3%BAbrica%20jovenes%20a%20programar.pdf">
								<AiOutlineFilePdf className="file-icon" />
							</a>
							<p>Rubrica JaP</p>
						</div>
						<div className="file-plus-name">
							<a href="https://github.com/JoaquinFernandez19/portflio-2.0/raw/master/src/components/data/coursera1.pdf">
								<AiOutlineFilePdf className="file-icon" />
							</a>
							<p>Coursera</p>
						</div>
					</div>
				</div>
				<div className="contact">
					<h1>Links</h1>
					<div className="contact-icons">
						<a
							href="https://www.linkedin.com/in/joaqu%C3%ADn-fernandez-rosso-b5973016b/"
							target="_blank"
							rel="noopener noreferrer">
							<FaLinkedin
								className="contact-icon"
								style={{ color: '#0077b5' }}
							/>
						</a>
						<a
							href="https://github.com/JoaquinFernandez19 "
							target="_blank"
							rel="noopener noreferrer">
							<FaGithub className="contact-icon" style={{ color: 'black' }} />
						</a>
					</div>
				</div>
			</div>

			<div className="extra-extra">
				<h1>I'm currently looking for a job as a frontend/react developer.</h1>
				<h3>
					If you want to recruit me or just want to leave me a question, my
					email is:
					<br />
					<span className="meil">xcopako@gmail.com</span>
				</h3>
			</div>
			<div style={{ textAlign: 'center', position: 'absolute', bottom: '0' }}>
				Drink some <FiCoffee /> and have a good day
			</div>
		</div>
	);
};

export default Extra;
