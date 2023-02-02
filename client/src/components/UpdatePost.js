import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, TextField, AppBar, Button, Typography, Paper } from '@material-ui/core';
import axios from "axios";
import FileBase from 'react-file-base64';
import { useNavigate } from "react-router-dom";

import icon from '../images/petIcon2023-01-25 225828.png';
import useStyles from './postFormstyle';

export const UpdatePost = ({posts, setPosts, updated, setUpdated}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const {id} = useParams();
  // console.log(id)
  // console.log(posts)

  //get the post data object out of posts using find method with id
  const singlePost = posts.find((post) => post._id === id)
  console.log(singlePost, singlePost.creator)

  const [updatedPost, setUpdatedPost] = useState(singlePost)
  console.log(updatedPost)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  
  const handleSubmit = (e) => {
    console.log(updatedPost);
    e.preventDefault();
    //update the data in database
    axios
    .put(`https://pet-neighbors-backend-test.onrender.com/posts/${id}`, updatedPost)
    .then((res) => {
      console.log(res);
      setUpdated(!updated); // trigger fetching data again from database in parent
      navigate("/myposts");
      })
    .catch((err) => console.log(err));

    
  }

  return (
    <Container>
    
      <AppBar className={classes.appBar} position='static' color='inherit'>
            <img className={classes.image} src={icon} alt="PetsIcon" height='60' />
            <Typography className={classes.heading} variant='h2' align='center'>Pet Neighbors</Typography>    
      </AppBar>
    
      <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>Edit the post</Typography>
        <TextField  
          name='creator' 
          variant='outlined' 
          label='Creator' 
          fullWidth 
          value={updatedPost.creator} 
          onChange={handleChange}  
        /> 
        <TextField  
          name='title' 
          variant='outlined' 
          label='Title' 
          fullWidth 
          value={updatedPost.title} 
          onChange={handleChange}  
        />
        <TextField  
          name='message' 
          variant='outlined' 
          label='Message' 
          multiline 
          fullWidth 
          value={updatedPost.message} 
          onChange={handleChange}  
        />
        <TextField  
          name='zipcode' 
          variant='outlined' 
          type="number" 
          label='Zipcode' 
          fullWidth 
          value={updatedPost.zipcode} 
          onChange={handleChange}  
        />  
        <div className={classes.fileInput}>
          <FileBase 
            type="file" 
            multiple={false} 
            onDone={({base64}) => setUpdatedPost({...updatedPost, selectedFile: base64})} 
          />
        </div>
        <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth>
            Save Changes
        </Button>
        <Button 
          variant="contained" 
          size="small" 
          onClick={() => navigate("/myposts")} 
          fullWidth>
            Back to My Posts
        </Button>
      </form>
      </Paper>
    </Container>
  )
}
