import React from 'react';
//Style
import './styles/App.scss';

//Components

import Menu from './Menu';
import Title from './Title';
import Content from './Content';
//
class App extends React.Component {
	state = {
		currentTab: 'Projects',
		mobileState: null,
	};

	handleSelect = (selected) => {
		this.setState({ currentTab: selected });
	};

	componentDidMount = (prevState) => {
		const menu = document.querySelector('.menu');
		if (prevState !== this.state) {
			window.addEventListener('resize', () => {
				if (window.innerWidth <= 798) {
					menu.style.display = 'none';
					this.setState({ mobileState: true });
				} else {
					this.setState({ mobileState: false });
				}
			});
		}
	};

	render() {
		return (
			<div className="main-container">
				<Title showMenu={this.showMenu} />
				<Menu
					handleSelect={this.handleSelect}
					mobileState={this.state.mobileState}
					active={this.state.currentTab}
				/>
				<div className="current-tab-title">
					<h1>
						{this.state.currentTab}
						<span
							className="animated flash infinite"
							style={{
								zIndex: '1',
							}}>
							|
						</span>
					</h1>
				</div>
				<Content current={this.state.currentTab} />
			</div>
		);
	}
}

export default App;
