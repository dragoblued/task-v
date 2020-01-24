import React from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import NavBarComponent from './components/NavBarComponent';
import './App.css';
import TaskOneComponent from './components/TaskOneComponent';
import MainComponent from './components/MainComponent';

const App: React.FC = () => {
  return (
	  	<div className="wrapper">
		    <main className="content">
		     	<NavBarComponent />
				 <BrowserRouter>
					<Switch>
						<Route exact path="/" component={MainComponent} />
						<Route path="/taskone" component={TaskOneComponent} />
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
