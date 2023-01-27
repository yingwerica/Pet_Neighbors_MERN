import React, { useState, useEffect } from 'react';
//import components for more easier styling 
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

import icon from '../images/petIcon2023-01-25 225828.png';
import useStyles from './allPostsstyle'

export const UserAllPosts = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Container maxWidth='lg'>
    {/* insert styles with classes */}
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <img className={classes.image} src={icon} alt="PetsIcon" height='60' />
        <Typography className={classes.heading} variant='h2' align='center'>Pet Neighbors</Typography>    
    </AppBar>
    <Button variant="contained" color="primary" size="large" style={{width:"20%"}} onClick={() => navigate("create")}>
      Create New Post
    </Button>
    <Button variant="contained" margin="auto auto" size="large" style={{width:"20%"}} onClick={() => navigate(-1)}>
      Back to Home Page
    </Button>
    <Grow in>
        <Container>
           
        </Container>

    </Grow>
</Container>
  )
}
