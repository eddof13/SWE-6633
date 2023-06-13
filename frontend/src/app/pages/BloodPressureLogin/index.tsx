/**
 *
 * BloodPressureLogin
 *
 */
import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Props {}

export function BloodPressureLogin(props: Props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
    navigate('/menu');
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
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
                variant="outlined"
                size="small"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
                variant="outlined"
                size="small"
              />
              <Button
                variant="contained"
                type="submit"
                onClick={handleSubmit}
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
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Don't have an account? <Link to="/register">Register</Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
