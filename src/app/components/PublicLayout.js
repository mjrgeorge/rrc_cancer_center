import { Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import AutoBreadcrumbs from './AutoBreadcrumbs';
import MobileLeftDrawer from './MobileLeftDrawer';

const PublicLayout = function ({ children }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box>
            <Header />
            {!matches && <MobileLeftDrawer />}
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <AutoBreadcrumbs />
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default PublicLayout;
