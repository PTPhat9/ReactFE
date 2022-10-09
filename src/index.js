import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import 'font-awesome/css/font-awesome.min.css';
// import './public/css/app.css';
import './public/css/app.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
