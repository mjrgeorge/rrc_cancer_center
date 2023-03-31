import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppStore from './AppStore';

const Communication = function () {
    const navigate = useNavigate();
    const handleRoute = (pageUrl) => {
        navigate(pageUrl, {
            replace: true,
        });
    };
    return (
        <Grid container direction={{ xs: 'column', sm: 'row', md: 'column' }}>
            <Grid item xs={6}>
                <Stack direction="column" spacing={1.5}>
                    <Typography variant="h3" color="inherit" mt={3} gutterBottom sx={{ cursor: 'pointer' }} onClick={() => handleRoute('/')}>
                        RR Clinic & Cancer Centre
                    </Typography>
                    {/* SOCIAL MEDIA ICON BUTTON */}
                    <Stack direction="row" spacing={1}>
                        <Avatar
                            sx={{
                                bgcolor: 'transparent',
                                border: '1px solid #1976d2',
                                cursor: 'pointer',
                            }}
                            variant="rounded"
                        >
                            <FacebookIcon color="primary" />
                        </Avatar>
                        <Avatar
                            sx={{
                                bgcolor: 'transparent',
                                border: '1px solid #1976d2',
                                cursor: 'pointer',
                            }}
                            variant="rounded"
                        >
                            <TwitterIcon color="primary" />
                        </Avatar>
                        <Avatar
                            sx={{
                                bgcolor: 'transparent',
                                border: '1px solid #1976d2',
                                cursor: 'pointer',
                            }}
                            variant="rounded"
                        >
                            <LinkedInIcon color="primary" />
                        </Avatar>
                        <Avatar
                            sx={{
                                bgcolor: 'transparent',
                                border: '1px solid #1976d2',
                                cursor: 'pointer',
                            }}
                            variant="rounded"
                        >
                            <InstagramIcon color="primary" />
                        </Avatar>
                        <Avatar
                            sx={{
                                bgcolor: 'transparent',
                                border: '1px solid #1976d2',
                                cursor: 'pointer',
                            }}
                            variant="rounded"
                        >
                            <PinterestIcon color="primary" />
                        </Avatar>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <MailOutlineOutlinedIcon color="inherit" fontSize="small" />
                        <Typography variant="subtitle2">abcdefgh@gmail.com</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <PhoneOutlinedIcon color="inherit" fontSize="small" />
                        <Typography variant="subtitle2">+880-1XXX-XX-XX-XX</Typography>
                    </Stack>
                    <Stack direction="column" sx={{ pr: 3, pb: 1 }}>
                        <Typography variant="subtitle2">For any Problem: 125-2458-5811(24/7) or</Typography>
                        <Typography variant="subtitle2">Send SMS. Help Line Number 42552.</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="column" spacing={1.5} pb={3} pt={{ xs: 0, sm: 3.2, md: 3 }}>
                    <AppStore />
                    <Typography variant="h6">Learn about our offers</Typography>
                    <Box sx={{ pr: 3 }}>
                        <OutlinedInput
                            type="email"
                            placeholder="Your email address"
                            size="small"
                            sx={{
                                borderRadius: '50px',
                                padding: '2px 4px',
                                border: '1px solid #1976d2',
                                maxWidth: '290px',
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            borderRadius: '50px',
                                            padding: '4px 20px',
                                            textTransform: 'capitalize',
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </InputAdornment>
                            }
                        />
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
};
export default Communication;
