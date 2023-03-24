import React from 'react';
import "./Navbar.scss";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import ProjectView from '../../Views/ProjectView/ProjectView';
import CvView from "../../Views/CvView/CvView";

const Navbar = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='Navbar-navbar'>
                    <button>
                        <Link to="/" >CV</Link>
                    </button>
                    <button>
                        <Link to="/projets">Projets</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/' element={<CvView />}></Route>
                    <Route path='/projets' element={<ProjectView />}></Route>
                    <Route path='/*' element={<CvView />}></Route>
                </Routes>
                <div>
                    <Outlet />
                </div>
            </BrowserRouter >
        </div >
    );
};

export default Navbar;