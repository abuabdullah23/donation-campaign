import React from 'react';
import Container from '../components/Container/Container';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
        </div>
    );
};

export default MainLayout;