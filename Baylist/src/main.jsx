import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import NavBar from "./components/NavBar";
import Layout from "./routes/layout.jsx";
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <NavBar />
    <App />
    <Layout />
  </React.StrictMode>
  </Router>
)
