import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Editing from './views/Editing';
import Compose from './views/Compose';
import Details from './views/Details';

const App: React.FC<AppProps> = props => {

return (
	<BrowserRouter>
		
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/details/:chirpid" element={<Details />}></Route>
			<Route path="/editing/:chirpid" element={<Editing />}></Route>
			<Route path="/compose" element={<Compose />}></Route>
				
			
		</Routes>
	</BrowserRouter>
)
}

interface AppProps { }

export default App;


