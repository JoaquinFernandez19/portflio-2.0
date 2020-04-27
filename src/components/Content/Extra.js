import React from 'react';
import '../styles/Extra.scss';
//icons
import { AiOutlineFilePdf } from 'react-icons/ai';

const Extra = () => {
	return (
		<div className="extra">
			<div className="files">
				<h1>Files</h1>
				<div className="files-icons">
					<div className="file-plus-name">
						<a href="">
							<AiOutlineFilePdf class="file-icon" />
						</a>
						<p>Resume</p>
					</div>
					<div className="file-plus-name">
						<a href="">
							<AiOutlineFilePdf class="file-icon" />
						</a>
						<p>Rubrica JaP</p>
					</div>
				</div>
			</div>
			<div className="contact"></div>
			<div className="extra-extra"></div>
		</div>
	);
};

export default Extra;
