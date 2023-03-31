/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    navLink: {
        textDecoration: 'none',
        color: 'inherit',
        marginBottom: 8,
        display: 'block',
    },
    navLinkActive: {
        textDecoration: 'none',
        color: 'gray',
        marginBottom: 8,
        display: 'block',
    },
});

const FooterNavLink = function () {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item container spacing={3}>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        About
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/about" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Recusandae cumque
                        </NavLink>
                    ))}
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        Centres of Excellence
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/centres_of_excellence" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Nesciunt itaque
                        </NavLink>
                    ))}
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        Diagnostics
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/diagnostics" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Culpa obcaecati
                        </NavLink>
                    ))}
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        Media
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/media" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Velit omnis
                        </NavLink>
                    ))}
                </Grid>
            </Grid>
            <Grid item container spacing={3}>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        Patient Query
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/patient_query" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Animi maiores
                        </NavLink>
                    ))}
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        Career Path
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/career Path" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Quas possimus
                        </NavLink>
                    ))}
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        Research
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/research" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Autem necessita
                        </NavLink>
                    ))}
                </Grid>
                <Grid item xs={6} md={3}>
                    <Typography variant="subtitle1" color="inherit" mt={3} fontWeight="bold" gutterBottom>
                        Member
                    </Typography>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <NavLink key={item} to="/member" className={(navInfo) => (navInfo.isActive ? classes.navLinkActive : classes.navLink)}>
                            Suscipit deleniti
                        </NavLink>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
export default FooterNavLink;
