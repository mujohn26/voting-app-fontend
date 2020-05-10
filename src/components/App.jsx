import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../views/Welcome.jsx';
import Vote from '../views/Vote.jsx';
import Candidate from '../views/Candidate.jsx';


class App extends Component {

	render() {
		return (
			<div className='app'>
				<Router>
					<Switch>
						<Route path='/' exact component={Welcome} />
						<Route path='/vote' component={Vote}/>
						<Route path='/candidate' component={Candidate}/>
					</Switch>
				</Router>
			</div>
		);
	}
}
export default App;