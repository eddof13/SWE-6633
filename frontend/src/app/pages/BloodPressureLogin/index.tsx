/**
 *
 * BloodPressureLogin
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
import { useBloodPressureLoginSlice } from './slice';
import { selectBloodPressureLogin } from './slice/selectors';

interface Props {}

export function BloodPressureLogin(props: Props) {
  const { actions } = useBloodPressureLoginSlice();
  const dispatch = useDispatch();

  const { username, accessToken, tokenType, error } = useSelector(
    selectBloodPressureLogin,
  );

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({
    user: false,
    password: false,
  });

  useEffect(() => {
    if (accessToken !== '') {
      alert('Login successful!');
      navigate('/menu');
    } else if (error) {
      alert(`${error}`);
      dispatch(actions.loginError(''));
      navigate('/');
    }
  }, [accessToken, error, touched]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (user && password) {
      dispatch(
        actions.loginData({
          username: user,
          password: password,
          role: ['user'],
        }),
      );
    } else {
      alert('Please fill in all fields');
      setTouched({
        user: true,
        password: true,
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prevState => ({ ...prevState, [field]: true }));
  };

  const handleRegister = () => {
    if (username) dispatch(actions.loginUsername(''));
    if (accessToken) dispatch(actions.loginAccessToken(''));
    if (tokenType) dispatch(actions.loginTokenType(''));
    navigate('/register');
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
                    value={user}
                    onChange={e => setUser(e.target.value)}
                    onBlur={() => handleBlur('user')}
                    required
                    error={!user && touched.user}
                    helperText={!user && touched.user && 'User is required'}
                    sx={{ marginBottom: 2 }}
                    variant="outlined"
                    size="small"
                    autoComplete="username"
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
                    // onClick={handleSubmit}
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
                    Login
                  </Button>
                </Box>
              </form>
              <Typography variant="body2" sx={{ marginTop: 2 }} align="center">
                Don't have an account?
              </Typography>
              <Button
                size="small"
                onClick={handleRegister}
                sx={{ color: '#B8860B' }}
              >
                Register
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
