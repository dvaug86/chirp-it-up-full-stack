import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './views/Home';
import Editing from './views/Editing';
import Compose from './views/Compose';
import Details from './views/Details';



const App: React.FC<AppProps> = props => {

return (
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/details/:id" element={<Details />}></Route>
			<Route path="/editing/:id" element={<Editing />}></Route>
			<Route path="/compose" element={<Compose />}></Route>
		</Routes>
		{/* the element is used to refer to that specific tsx file */}
		
		
	</BrowserRouter>
)
}

interface AppProps { }

export default App;


