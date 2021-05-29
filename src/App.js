import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout.js';
import BaseRouter from './Routes.js';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<BaseRouter />
				</Layout>
			</BrowserRouter>
		</div>
	);
}

export default App;
