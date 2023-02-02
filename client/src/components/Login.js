import React from 'react'
import { Container, AppBar, Typography } from '@material-ui/core';
import { useNavigate } from "react-router-dom"

import icon from '../images/petIcon2023-01-25 225828.png';
import useStyles from './postFormstyle';
import './loginstyle.css';

export const Login = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/myposts")

    }

  return (
    <Container>
    
    <AppBar className={classes.appBar} position='static' color='inherit'>
          <img className={classes.image} src={icon} alt="PetsIcon" height='60' />
          <Typography className={classes.heading} variant='h2' align='center'>Pet Neighbors</Typography>    
    </AppBar>

    <div className="form">
     <form onSubmit={handleSubmit}>
       <div className="input-container">
         <label className="label">Username </label>
         <input type="text" name="uname" required />
         
       </div>
       <div className="input-container">
         <label className="label">Password </label>
         <input type="password" name="pass" required />
         
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
   </div>

    </Container>
  )
}
