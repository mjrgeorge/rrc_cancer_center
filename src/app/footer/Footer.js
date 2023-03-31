import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React from 'react';
import Communication from './Communication';
import Copyright from './Copyright';
import FooterNavLink from './FooterNavLink';

const Footer = function () {
    return (
        <footer>
            <Paper variant="outlined" square sx={{ pl: { xs: 6, sm: 12, md: 8 }, pr: { xs: 1, sm: 0, md: 5 }, py: 3 }}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid container item direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>
                        {/* FOOTER LEFT PART */}
                        <Grid item xs={12} md={4}>
                            <Communication />
                        </Grid>
                        {/* FOOTER RIGHT PART */}
                        <Grid item xs={12} md={8}>
                            <FooterNavLink />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
            {/* COPYRIGHT PART */}
            <Paper variant="outlined" square sx={{ p: 2.5 }}>
                <Copyright />
            </Paper>
        </footer>
    );
};
export default Footer;
