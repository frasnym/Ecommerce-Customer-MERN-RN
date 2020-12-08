import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./containers/HomePage";
import ProductsListPage from "./containers/ProductsListPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/:slug" component={ProductsListPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
