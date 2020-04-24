import React from 'react';
//Style
import './styles/App.scss';

//Components

import Menu from './Menu';
import Title from './Title';
import Content from './Content';
//
class App extends React.Component {
	state = { currentTab: 'Extra' };

	handleSelect = (selected) => {
		this.setState({ currentTab: selected });
	};

	render() {
		return (
			<div className="main-container">
				<Title />
				<Menu handleSelect={this.handleSelect} />
				<div className="current-tab-title">
					<h1>&gt;{this.state.currentTab}</h1>
				</div>
				<Content current={this.state.currentTab} />
			</div>
		);
	}
}

export default App;
