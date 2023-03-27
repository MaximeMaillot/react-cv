import React from 'react';
import "./Navbar.scss";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProjectView from '../../Views/Project/ProjectView/ProjectView';
import CvView from "../../Views/CvView/CvView";
import ProjectDetailView from '../../Views/Project/ProjectDetailView/ProjectDetailView';
import Footer from '../Footer/Footer';

const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='Navbar-navbar'>
                    <button>
                        <Link to="/" >CV</Link>
                    </button>
                    <button>
                        <Link to="/projet">Projets</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/' element={<CvView />}></Route>
                    <Route path='/projet' element={<ProjectView />}></Route>
                    <Route path="/projet/:projectId" element={<ProjectDetailView />} />
                    <Route path='/*' element={<CvView />}></Route>
                </Routes>
                <div>
                    <Outlet />
                </div>
                <Footer />
            </BrowserRouter >
        </div >
    );
};

export default Navbar;