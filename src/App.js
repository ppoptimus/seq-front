import React, {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchData from "./Components/Contents/SearchData";

function App() {
  
	return (
    <Router>
      <div>
      
      </div>
      <Switch>
          <Route path="/search">
            <SearchData/>
          </Route>
          
        </Switch>
    </Router>
		
	)
}

export default App
