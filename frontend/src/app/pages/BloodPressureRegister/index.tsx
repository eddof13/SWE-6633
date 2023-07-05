/**
 *
 * BloodPressureRegister
 *
 */
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useBloodPressureRegisterSlice } from './slice';
import { selectBloodPressureRegister } from './slice/selectors';

interface Props {}

export function BloodPressureRegister(props: Props) {
  const { actions } = useBloodPressureRegisterSlice();
  const dispatch = useDispatch();

  const { message, error } = useSelector(selectBloodPressureRegister);

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    if (message === 'User registered successfully!') {
      alert(message);
      dispatch(actions.registerMessage(''));
      navigate('/');
    } else if (message === 'Error: Username is already taken!') {
      alert(message);
      dispatch(actions.registerMessage(''));
      navigate('/register');
    } else if (message === 'Error: Email is already in use!') {
      alert(message);
      dispatch(actions.registerMessage(''));
      navigate('/register');
    } else if (error) {
      alert(`${error}. Please try again.`);
      dispatch(actions.registerError(''));
      navigate('/register');
    }
  }, [message, error, touched]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username && email && password) {
      dispatch(
        actions.registerData({
          username: username,
          email: email,
          password: password,
          role: ['user'],
        }),
      );
    } else {
      alert('Please fill in all fields');
      setTouched({
        username: true,
        email: true,
        password: true,
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prevState => ({ ...prevState, [field]: true }));
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '0 16px',
        }}
      >
        <Typography variant="h4" sx={{ color: '#333333' }}>
          Blood Pressure App
        </Typography>
        <Card variant="outlined" sx={{ width: '100%', maxWidth: '400px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <TextField
                    label="User Name"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    onBlur={() => handleBlur('username')}
                    required
                    error={!username && touched.username}
                    helperText={
                      !username && touched.username && 'Username is required'
                    }
                    sx={{ marginBottom: 2 }}
                    variant="outlined"
                    size="small"
                    autoComplete="username"
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    required
                    error={!email && touched.email}
                    helperText={!email && touched.email && 'Email is required'}
                    sx={{ marginBottom: 2 }}
                    variant="outlined"
                    size="small"
                    autoComplete="email"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    required
                    error={!password && touched.password}
                    helperText={
                      !password && touched.password && 'Password is required'
                    }
                    sx={{ marginBottom: 2 }}
                    variant="outlined"
                    size="small"
                    inputProps={{ 'data-testid': 'password-input' }}
                    autoComplete="current-password"
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: '#B8860B',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: '#808080',
                      },
                      '&:active': {
                        backgroundColor: '#808080',
                      },
                      height: '75px',
                      fontSize: '1.3rem',
                      textTransform: 'none',
                    }}
                  >
                    Register
                  </Button>
                </Box>
              </form>
              <Typography variant="body2" sx={{ marginTop: 2 }} align="center">
                Already have an account?
              </Typography>
              <Button
                size="small"
                onClick={handleLogin}
                sx={{ color: '#B8860B' }}
              >
                Login
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
