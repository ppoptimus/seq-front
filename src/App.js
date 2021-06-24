import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "./Components/Contents/Dashboard";
import SearchData from "./Components/Contents/SearchData";
import Footer from "./Components/Menu/Footer";
import HeaderBar from "./Components/Menu/Header";
import SideBar from "./Components/Menu/SideBar";

function App() {
  
	return (
    <Router>
      <div>
        <HeaderBar/>
        <SideBar/>
        <Dashboard/>
        <Footer/>
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
