import React from 'react';
//import components for more easier styling 
import { Container, AppBar, Typography, Grid, Button, Box, CircularProgress } from '@material-ui/core';
import { Card, CardActions, CardContent, CardMedia } from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import moment from 'moment';
import { useNavigate } from "react-router-dom";

//to use useIsFocused hook to re-render the component
// import { useIsFocused } from '@react-navigation/native';

import icon from '../../images/petIcon2023-01-25 225828.png';
import useStyles from './allPostsstyle'
import axios from "axios"


export const UserAllPosts = ({posts, setPosts, updated, setUpdated}) => {
  const classes = useStyles();
  const navigate = useNavigate();
 
  const deletePost = (id) => {
    console.log(id)

    axios
      .delete(`https://pet-neighbors-backend-test.onrender.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setUpdated(!updated); // trigger fetching data again from database in parent
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container maxWidth='lg'>
    {/* insert styles with classes */}
    <AppBar className={classes.appBar} position='static' color='inherit'>
            <img className={classes.image} src={icon} alt="PetsIcon" height='60' />
            <Typography className={classes.heading} variant='h2' align='center'>Pet Neighbors</Typography>    
    </AppBar>
      <Box  sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingBottom: '5%',
        '& > *': {
          m: 1,
        },
      }}
      >
        <Button variant="contained" color="primary" size="large" style={{width:"20%"}} onClick={() => navigate("create")}>
        Create New Post
        </Button>
        <Button variant="contained" size="large" style={{width:"20%" }} onClick={() => navigate("/")}>
        Back to Home Page 
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
                                                                                {/* pass id to the update route */}
                    <Button size="small" color="primary" onClick={() => navigate(`edit/${post._id}`)}><EditIcon fontSize="small" />Edit</Button>
                    
                    <Button size="small" color="primary" onClick={() => deletePost(post._id)}><DeleteIcon fontSize="small" /> Delete</Button>
                  </CardActions>
                </Card>
            </Grid>
          ))}

        </Grid>
    ) }

</Container>
  )
}
