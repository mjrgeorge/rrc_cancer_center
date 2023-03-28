import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './about/About';
import Career from './career/Career';
import Contact from './contact/Contact';
import Departments from './departments/Departments';
import FindDoctors from './find_doctors/FindDoctors';
import Home from './home/Home';
import PageNotFound from './page_not_found/PageNotFound';

const App = function () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/find_doctors" element={<FindDoctors />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default App;
