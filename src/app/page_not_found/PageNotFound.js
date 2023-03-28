import { Stack, Typography } from '@mui/material';
import React from 'react';
import PublicLayout from '../components/PublicLayout';

const PageNotFound = function () {
    return (
        <PublicLayout>
            <Stack justifyContent="center" sx={{ minHeight: '80vh' }}>
                <Typography variant="h1" color="error" align="center" gutterBottom>
                    Sorry, Page Not Found !
                </Typography>
            </Stack>
        </PublicLayout>
    );
};

export default PageNotFound;
