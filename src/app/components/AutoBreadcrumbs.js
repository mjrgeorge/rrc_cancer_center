/* eslint-disable no-unsafe-optional-chaining */
import HomeIcon from '@mui/icons-material/Home';
import { Stack, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { makeStyles } from '@mui/styles';
import { NavLink, useLocation } from 'react-router-dom';

// A STYLE SHEET
const useStyles = makeStyles({
    navLink: {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: 14,
    },
    navLinkActive: {
        textDecoration: 'none',
        color: 'gray',
        fontSize: 14,
    },
});

const AutoBreadcrumbs = function () {
    const classes = useStyles();
    const location = useLocation();
    const pathName = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs sx={{ mb: 3 }}>
            <NavLink to="/" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={0.5}>
                    <HomeIcon sx={{ width: 18, height: 18 }} />
                    <Typography>Home</Typography>
                </Stack>
            </NavLink>
            {pathName.map((name, index) => {
                const routeTo = `/${pathName.slice(0, index + 1).join('/')}`;
                const isLast = index === pathName.length - 1;
                return isLast ? (
                    <Typography key={name}>{name.charAt(0).toUpperCase() + name?.replace('_', ' ')?.replace('(', ' (').slice(1)}</Typography>
                ) : (
                    <NavLink key={name} to={routeTo} className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                        {name.charAt(0).toUpperCase() + name?.replace('_', ' ')?.replace('(', ' (').slice(1)}
                    </NavLink>
                );
            })}
        </Breadcrumbs>
    );
};

export default AutoBreadcrumbs;
