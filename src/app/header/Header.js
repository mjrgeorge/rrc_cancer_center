import MenuIcon from '@mui/icons-material/Menu';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mobileDrawerOpenAction } from '../../redux/Action';

const Header = function () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mobileDrawerOpen = useSelector((state) => state.Reducer.mobileDrawerOpen);

    const handleMobileDrawerClose = () => {
        dispatch(mobileDrawerOpenAction(!mobileDrawerOpen));
    };

    const handleRouteNavigate = (pageUrl) => {
        navigate(pageUrl);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ zIndex: (themeEx) => themeEx.zIndex.drawer + 2 }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleMobileDrawerClose} sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => handleRouteNavigate('/')}>
                        RRC & Cancer Center
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: '#fff' }} onClick={() => handleRouteNavigate('/')}>
                            Home
                        </Button>
                        <Button sx={{ color: '#fff' }} onClick={() => handleRouteNavigate('/departments')}>
                            Departments
                        </Button>
                        <Button sx={{ color: '#fff' }} onClick={() => handleRouteNavigate('/find_doctors')}>
                            Find Doctors
                        </Button>
                        <Button sx={{ color: '#fff' }} onClick={() => handleRouteNavigate('/career')}>
                            Career
                        </Button>
                        <Button sx={{ color: '#fff' }} onClick={() => handleRouteNavigate('/about')}>
                            About
                        </Button>
                        <Button sx={{ color: '#fff' }} onClick={() => handleRouteNavigate('/contact')}>
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
