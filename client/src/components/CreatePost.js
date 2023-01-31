import React, { useState } from 'react'
import { Container, TextField, AppBar, Button, Typography, Paper } from '@material-ui/core';
import axios from "axios";
import FileBase from 'react-file-base64';
import { useNavigate } from "react-router-dom";


import icon from '../images/petIcon2023-01-25 225828.png';
import useStyles from './postFormstyle';

export const CreatePost = ({ updated, setUpdated }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [post, setPost] = useState({
      creator: '',
      title: '',
      message: '',
      zipcode: '',
      selectedFile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    ////use axios to make api calls
    axios.post("http://localhost:5000/posts", post)
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
        <Typography variant='h6'>Create a post</Typography>
                                                                                          {/* ...post make sure all the data will persist but only change specific property of this textField */}
        <TextField  name='creator' variant='outlined' label='Creator' fullWidth value={post.creator} onChange={handleChange}  /> 
        <TextField  name='title' variant='outlined' label='Title' fullWidth value={post.title} onChange={handleChange}  />
        <TextField  name='message' variant='outlined' label='Message' multiline fullWidth value={post.message} onChange={handleChange}  />
        <TextField  name='zipcode' variant='outlined' type="number" label='Zipcode' fullWidth value={post.zipcode} onChange={handleChange}  />  
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPost({...post, selectedFile: base64})} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" size="small" onClick={() => navigate("/myposts")} fullWidth>Back to My Posts</Button>
      </form>
      </Paper>
    </Container>
  )
}
