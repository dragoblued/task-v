import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarComponent from './components/NavBarComponent';
import TaskOneComponent from './components/TaskOneComponent';
import TaskTwoComponent from './components/TaskTwoComponent';
import MainComponent from './components/MainComponent';
import './App.css';

const App: React.FC = () => {
  return (
	  	<div className="wrapper">
		    <main className="content">
		     	<NavBarComponent />
				 <BrowserRouter>
					<Switch>
						<Route exact path="/" component={MainComponent} />
						<Route path="/taskone" component={TaskOneComponent} />
						<Route path="/tasktwo" component={TaskTwoComponent} />
					</Switch>
				 </BrowserRouter>
		    </main>
		    <footer className="footer">
		    	<p className="footer_text">@copyright Tabaeva Natalia</p>
		    </footer>
	    </div>
  );
}

export default App;
