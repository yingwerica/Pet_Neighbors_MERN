import React, { useState, useEffect } from 'react';
//import components for more easier styling 
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import icon from './images/petIcon2023-01-25 225828.png';
import useStyles from './styles'


export default function App() {
  const classes = useStyles();

  return (
    
    <Container maxWidth='lg'>
        {/* insert styles with classes */}
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <img className={classes.image} src={icon} alt="PetsIcon" height='60' />
            <Typography className={classes.heading} variant='h2' align='center'>Pet Neighbors</Typography>
            
        </AppBar>
        <Grow in>
            <Container>
               
            </Container>

        </Grow>
    </Container>
  )
}
