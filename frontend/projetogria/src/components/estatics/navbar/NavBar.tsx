// Importing files from Material-UI
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, Link } from '@mui/material';
import './NavBar.css'



export default function Navbar() {

    return (
        <AppBar className="colorAppBar" position='absolute'>
            <Toolbar>
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                    <Box display="flex" justifyContent="center">
                        <img src="https://i.imgur.com/XtNtf7f.jpg" alt="" className="logo" />
                    </Box>
                </Box>

                <Box className="login">
                    <Typography>
                        Oportunidades
                    </Typography>
                </Box>
                <Box className="loginn">
                    <Typography>
                        LOGIN
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

