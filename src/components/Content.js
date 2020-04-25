import React from 'react';
//Components
import Skills from './Content/Skills';
import Projects from './Content/Projects';
//
class Content extends React.Component {
	render() {
		if (this.props.current === 'Projects') {
			return <div className="current-content"><Projects /></div>;
		}
		if (this.props.current === 'Skills') {
			return (
				<div className="current-content">
					<Skills />
				</div>
			);
		}
		if (this.props.current === 'About') {
			return <div className="current-content">About</div>;
		}
		if (this.props.current === 'Extra') {
			return <div className="current-content">Extra!!!!!!CONTENTTTT</div>;
		}
	}
}

export default Content;
