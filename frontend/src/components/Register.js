// src/components/Register.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Container,Box} from '@mui/material';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post('http://localhost:5000/user/register', values);
        if (response.status === 201) {
          // Handle registration success
          navigate('/login');
        }
      } catch (error) {
        // Handle registration error
        console.error('Registration failed', error);
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
      <h1>Register</h1>
      <br></br>
      <div class="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          class="form-control"
          {...formik.getFieldProps('username')}
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
      </div>
      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <button type="submit" class='btn btn-primary' disabled={formik.isSubmitting}>Register</button>
    </form>
    </Box>

    </Container>
  );
};

export default Register;
