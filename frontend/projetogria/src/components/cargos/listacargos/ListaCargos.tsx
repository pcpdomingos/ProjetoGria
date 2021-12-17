import React, { useState, useEffect } from 'react'
import './ListaCargos.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';
import Cargos from '../../../models/Cargos';
import { busca } from '../../../services/Service';
import { Grid } from '@mui/material';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function ListaCargos() {
  const [cargos, setCargos] = useState<Cargos[]>([])
  let history = useHistory();


  async function getCargos() {
    await busca("/cargos/todos", setCargos)
  }

  useEffect(() => {
    getCargos()
  }, [cargos.length])

  return (
    <>
      {
        cargos.map(cargo => (
          <Grid container className='flex-container flex-item'>
            <Grid item xs={3}>
              <Box m={2} display='flex'>
                <Card className='cardlista'>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.empresa}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {cargo.nome}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {cargo.nivel}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.regiao}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.periodo}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box m={2} display='flex'>
                <Card className='cardlista'>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.empresa}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {cargo.nome}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {cargo.nivel}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.regiao}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.periodo}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box m={2} display='flex'>
                <Card className='cardlista'> 
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.empresa}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {cargo.nome}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {cargo.nivel}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.regiao}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.periodo}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Box m={2} display='flex'>
                <Card className='cardlista'> 
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.empresa}
                    </Typography>
                    <Typography variant="h5" component="div">
                    {cargo.nome}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {cargo.nivel}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.regiao}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {cargo.periodo}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>

        ))
      }
    </>
  )
}
export default ListaCargos;
