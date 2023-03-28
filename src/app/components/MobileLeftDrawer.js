import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { mobileDrawerOpenAction } from '../../redux/Action';

const useStyles = makeStyles({
    navLink: {
        textDecoration: 'none',
        color: 'inherit',
    },
    navLinkActive: {
        textDecoration: 'none',
        color: 'red',
    },
});

const drawerWidth = 150;

const MobileLeftDrawer = function () {
    const classes = useStyles();

    const location = useLocation();

    const dispatch = useDispatch();
    const mobileDrawerOpen = useSelector((state) => state.Reducer.mobileDrawerOpen);

    const handleMobileDrawerClose = () => {
        dispatch(mobileDrawerOpenAction(false));
    };

    return (
        <Drawer
            open={mobileDrawerOpen}
            onClose={handleMobileDrawerClose}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            <Toolbar variant="dense" />
            <List component="nav" disablePadding>
                <NavLink to="/" className={location.pathname === '/' ? classes.navLinkActive : classes.navLink}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton onClick={handleMobileDrawerClose}>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to="/departments" className={location.pathname === '/departments' ? classes.navLinkActive : classes.navLink}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton onClick={handleMobileDrawerClose}>
                            <ListItemText primary="Departments" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to="/find_doctors" className={location.pathname === '/find_doctors' ? classes.navLinkActive : classes.navLink}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton onClick={handleMobileDrawerClose}>
                            <ListItemText primary="Find Doctors" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to="/career" className={location.pathname === '/career' ? classes.navLinkActive : classes.navLink}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton onClick={handleMobileDrawerClose}>
                            <ListItemText primary="Career" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to="/about" className={location.pathname === '/about' ? classes.navLinkActive : classes.navLink}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton onClick={handleMobileDrawerClose}>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to="/contact" className={location.pathname === '/contact' ? classes.navLinkActive : classes.navLink}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton onClick={handleMobileDrawerClose}>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </List>
        </Drawer>
    );
};
export default MobileLeftDrawer;
