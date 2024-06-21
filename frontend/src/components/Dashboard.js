// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api_req from './services/AxiosConfig';

const Dashboard = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleAddTasks = () => {
    navigate('/tasks/add');
  }
  const handleLogout = async(event) =>{
    event.preventDefault();
    try {
      const response = await api_req.get('http://localhost:5000/user/logout');
      console.log('logout response :',response)
      if (response.status==200)
        {
          navigate('/home');
        }

    }catch(error){
      console.error('Logout failed',error);
    }
  };



  return (
    <Container>
      <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="flex-start" 
          mt={3} // Increase margin-top for more spacing
          sx={{ height: 'calc(4vh - 2px)', textAlign: 'center' }} // Adjust height to fit below the navbar
        >
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <h1><a class="navbar-brand" href="#">Dashboard</a></h1>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" onClick={handleLogout}>Logout <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

      </Box>
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        mt={4} 
        sx={{ height: '100vh', textAlign: 'center' }}
      >
       
        <Box 
          className={animate ? 'bounce' : ''} 
          sx={{ 
            width: '45%', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'right', 
            alignItems: 'right' 
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            click to add your first Task/Goal
          </Typography>
          <div className="mt-4">
            <button className="btn btn-primary mr-2" onClick={handleAddTasks} >Add Tasks</button>
          </div>        
          </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
