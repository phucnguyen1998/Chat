import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import firebase, {auth} from './firebase.js'

import './index.css';

import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {user: null}
		this.logOutUser = this.logOutUser.bind(this);
	}
	componentDidMount(){
		auth.onAuthStateChanged(user => {
			if(user){
				this.setState({
					user
				});
			}
		});
	}

	logOutUser = () => {
		firebase.auth().signOut()
			.then(window.location = "/");
	}

	render(){
		return(
			<Router>
				<div className="app">
					<nav className="main-nav">
						{!this.state.user && 
							<div>
								<Link to="/login">Đăng Nhập</Link>
								<Link to="/register">Đăng ký</Link>
							</div>
						}

						{this.state.user && 
							<a href="#!" onClick={this.logOutUser}>Đăng xuất</a>
						}
					</nav>

					<Switch>
						<Route path="/" exact render={() => <Home user={this.state.user}/>} />
						<Route path="/login" exact component={Login} />
						<Route path="/register" exact component={Register} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		);
	}
}

const NoMatch = ({location}) => <div>No route match for {location.pathname}</div>;

export default App;