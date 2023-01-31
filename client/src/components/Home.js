import React from 'react'
//import components for more easier styling 
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

import icon from '../images/petIcon2023-01-25 225828.png';
import useStyles from '../styles'

export const Home = () => {
    const classes = useStyles();
    const navigate = useNavigate();

  return (
    <Container maxWidth='lg'>
        {/* insert styles with classes */}
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <img className={classes.image} src={icon} alt="PetsIcon" height='60' />
            <Typography className={classes.heading} variant='h2' align='center'>Pet Neighbors</Typography>    
        </AppBar>
        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          style={{width:"20%"}}
          onClick={() => navigate("myposts")}>
          My Posts
        </Button>
        <Grow in>
            <Container>
               
            </Container>

        </Grow>
    </Container>
  )
}