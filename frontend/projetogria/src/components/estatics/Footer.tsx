import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


export default function Navbar() {
    return (
        <Grid justifyContent='center'>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Grid>
    )
}
