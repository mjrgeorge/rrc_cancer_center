import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const Footer = function () {
    return (
        <Box component="footer" my={3}>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mjrgeorge.netlify.app/">
                    mjrgeorge
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
};

export default Footer;
