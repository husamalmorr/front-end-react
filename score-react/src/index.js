import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import About from './About';
import Features from './Features';
import Courses from './Courses';
import Courses2 from './Courses-2';
import Courses3 from './Courses-3';
import Pricing from './Pricing';
import Faq from './Faq';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import Logolist from './Logo-list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Features />
    <Courses />
    <Courses2 />
    <Courses3 />
    <Pricing />
    <Faq />
    <Contact />
    <Logolist />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
