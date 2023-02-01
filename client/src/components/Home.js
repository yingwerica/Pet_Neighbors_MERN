import React from 'react'
//import components for more easier styling 
import { Container, AppBar, Typography, Grid, Button, CircularProgress, Box } from '@material-ui/core';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core/';
import EmailIcon from '@material-ui/icons/Email';

import moment from 'moment';
import { useNavigate } from "react-router-dom";

import icon from '../images/petIcon2023-01-25 225828.png';
import useStyles from './UserPost/allPostsstyle'

export const Home = ({ posts, setPosts }) => {
    const classes = useStyles();
    const navigate = useNavigate();

  return (
    <Container maxWidth='lg'>
        {/* insert styles with classes */}
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <img className={classes.image} src={icon} alt="PetsIcon" height='60' />
            <Typography className={classes.heading} variant='h2' align='center'>Pet Neighbors</Typography>    
        </AppBar>
        <Box  sx={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: '5%', '& > *': {m: 1,},}}>
          <Button variant="contained" color="primary" size="large" style={{width:"20%"}} onClick={() => navigate("/login")}>
          Login
          </Button>
          <Button variant="contained" color="primary" size="large" style={{width:"20%" }} onClick={() => navigate("/myposts")}>
          My Posts
          </Button>
        </Box>

        {!posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignIterms="stretch" spacing={3} sx={{ paddingLeft: 1, paddingRight: 5, paddingTop: 5 }}
        >
          {posts.map((post)=>(
            <Grid key={post._id} item xs={12} sm={4}>
                  <Card className={classes.card}>
                  <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                  <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="h6">{post.zipcode}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                  </div>
                  <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                  
                    <Button size="small" color="primary" onClick={() => navigate("/")}><EmailIcon fontSize="small" />{`Contact ${post.creator}`}</Button>

                  </CardActions>
                </Card>
            </Grid>
          ))}

        </Grid>
    ) }
    </Container>
  )
}
