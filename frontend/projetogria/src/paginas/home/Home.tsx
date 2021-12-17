import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import './Home.css';
import ListaCargos from '../../components/cargos/listacargos/ListaCargos';
import NavBar from '../../components/estatics/navbar/NavBar';



function Home() {
    return (
        <Grid container>
            <NavBar />

            <Grid item container >
                <Grid item xs={12} >
                    <Box m={2} >
                        <Card className='card'>
                            <CardContent>
                                <Grid item container xs={12} alignItems='center'>
                                    <Box className='pesquisa'>
                                        <form noValidate autoComplete="off">
                                            <TextField className='forma' id="standard-basic" label="Cargo, habilidades ou empresa" />
                                        </form>
                                    </Box>
                                    <Box className='pesquisa'>
                                        <form noValidate autoComplete="off">
                                            <TextField className='forma' id="standard-basic" label="Pais, cidade ou estado" />
                                        </form>
                                    </Box>
                                    <Box className='pesquisa'>
                                        <Button className="buttom fonte" variant="contained">
                                            limpar
                                        </Button>
                                    </Box>
                                    <Box className='pesquisa'>
                                        <Button className="buttom" variant="contained">
                                            Pesquisar
                                        </Button>
                                    </Box>
                                </Grid>

                            </CardContent>
                        </Card>
                        <Box className='texto'>
                            <Typography>
                                <h1>Encontramos essas oportunidades cadastradas </h1>
                            </Typography>
                        </Box>
                    </Box>
                    <Grid container>
                        <Grid item sm={3} xs={3} >
                            <Box m={2} className='cardcerto'>
                                <ListaCargos />
                            </Box>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

        </Grid >


    );
}

export default Home;