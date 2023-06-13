/**
 *
 * BloodPressureRegister
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
import { Link, useNavigate } from 'react-router-dom';

interface Props {}

export function BloodPressureRegister(props: Props) {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Re-enter Password:', rePassword);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRePassword('');

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
              <TextField
                label="First Name"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
                variant="outlined"
                size="small"
              />
              <TextField
                label="Last Name"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
                variant="outlined"
                size="small"
              />
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
              <TextField
                label="Re-enter Password"
                type="password"
                value={rePassword}
                onChange={e => setRePassword(e.target.value)}
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
                Register
              </Button>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Already have an account? <Link to="/">Login</Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
