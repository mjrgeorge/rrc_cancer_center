/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import React from 'react';

const Copyright = function () {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
            <Grid item xs={12} md={6}>
                <Typography variant="body2" align="center">
                    {'Copyright © '} {new Date().getFullYear()}{' '}
                    <Link color="inherit" underline="hover" href="https://mjrgeorge.netlify.app/" target="_blank" rel="noopener">
                        Rayhans Radiance Clinic & Cancer Centre Pvt Ltd.{' '}
                    </Link>
                    All rights reserved.
                </Typography>
            </Grid>
            <Grid item container direction="row" justifyContent="center" alignItems="center" xs={12} md={6} spacing={2}>
                <Grid item>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Disclaimer
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Privacy Policy
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Terms of Services
                        </Link>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" align="center">
                        <Link color="inherit" underline="hover" href="#">
                            Sitemap
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Copyright;
