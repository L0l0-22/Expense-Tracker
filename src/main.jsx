import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';
import './index.css';
import { ExpenseProvider } from './components/Context/ExpenseContext';
import { Navbar } from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenseProvider>
      <Navbar/>
      <App />
      <Toaster />
      <Footer/>
    </ExpenseProvider>
  </React.StrictMode>
);