import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Components/Contents/Dashboard"
import GenTextFile from "./Components/Contents/GenTextFile"
import RequestForm from "./Components/Contents/RequestForm"
import SearchData from "./Components/Contents/SearchResult"
import Footer from "./Components/Menu/Footer"
import HeaderBar from "./Components/Menu/Header"
import SideBar from "./Components/Menu/SideBar"

function App() {
	return (
		<div>
			<Router>
				<HeaderBar />
				<SideBar />

				<Switch>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
					<Route path='/request'>
						<RequestForm />
					</Route>
					<Route path='/search'>
						<SearchData />
					</Route>
					<Route path='/gentextfile'>
						<GenTextFile />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
