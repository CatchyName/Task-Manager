import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Tasks from './components/Tasks.js';
import ErrorPage from './components/ErrorPage.js';


function App() {

	return (
		<Router>
			<div className="App">
				<Navbar title="Task list" abouthref="/about" />

				<Switch>
					<Route path="/" exact component={Tasks} />
					<Route path="/about" component={About} />
					<Route path="/" component={ErrorPage} />
				</Switch>

				<footer></footer>
			</div>
		</Router>

	);
}

export default App;
