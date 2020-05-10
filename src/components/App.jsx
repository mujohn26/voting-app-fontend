import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../views/Welcome.jsx';



class App extends Component {

	render() {
		return (
			<div className='app'>
				<Router>
					<Switch>
						<Route path='/' exact component={Welcome} />
					</Switch>
				</Router>
			</div>
		);
	}
}
export default App;