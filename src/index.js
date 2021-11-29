import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Aboutus from './pages/About us/About us';
import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';
const configRouting = (
<Router>
<div className="container">
  <div className="row">
    <div className="col-sm-12">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink exact="true" className="nav-link" to="/">Home</NavLink>
          </li>
          <li>
          <NavLink className="nav-link" to="Aboutus/">About us</NavLink>
        </li>
      </ul>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="Aboutus/" element={<Aboutus />} />
    </Routes>

      </div>
    </div>
</div>




</Router>




);


ReactDOM.render(
 configRouting,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
