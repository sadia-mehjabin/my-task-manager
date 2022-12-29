import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar2 from '../shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar2></Navbar2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;