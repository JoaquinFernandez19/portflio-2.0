import React from 'react';
//Components
import Skills from './Skills';
//
class Content extends React.Component {
	render() {
		if (this.props.current === 'Projects') {
			return <div className="current-content">Projects!!!!!!CONTENTTTT</div>;
		}
		if (this.props.current === 'Skills') {
			return (
				<div className="current-content">
					<Skills />
				</div>
			);
		}
		if (this.props.current === 'About') {
			return <div className="current-content">About!!!!!!CONTENTTTT</div>;
		}
		if (this.props.current === 'Extra') {
			return <div className="current-content">Extra!!!!!!CONTENTTTT</div>;
		}
	}
}

export default Content;
