// src/components/Login.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import api_req from './services/AxiosConfig';
import { useNavigate } from 'react-router-dom';
import { Container,Box } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await api_req.post('http://localhost:5000/user/login', values);
        if (response.status === 200) {
          // Handle login success, e.g., save token, redirect
          // navigate('/home');
          navigate('/dashboard');
        }
      } catch (error) {
        // Handle login error
        console.error('Login failed', error);
      }
      setSubmitting(false);
    },
  });

  return (
    <Container>
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        mt={4} 
        sx={{ height: '100vh', textAlign: 'left' }}
      >
      <form onSubmit={formik.handleSubmit}>
            <h1>Login</h1>
            <br></br>
            <div class="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                {...formik.getFieldProps('username')}
                class="form-control"
                placeholder='Enter username'
              />
              {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
              ) : null}
            </div>
            <div class='form-group'>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                {...formik.getFieldProps('password')}
                class='form-control'
              />
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <button type="submit" class='btn btn-primary' disabled={formik.isSubmitting}>Login</button>
          </form>
          </Box>

    </Container>
    


  );
};

export default Login;
