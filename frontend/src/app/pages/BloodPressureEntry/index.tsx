/**
 *
 * BloodPressureEntry
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
  Tooltip,
  IconButton,
  MenuItem,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

interface Props {}

export function BloodPressureEntry(props: Props) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/menu');
  };
  const [systolic, setSystolic] = useState('120');
  const [diastolic, setDiastolic] = useState('80');
  const [dateTime, setDateTime] = useState(getDefaultDateTime());

  function getDefaultDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(
      JSON.stringify({
        Systolic: systolic,
        Diastolic: systolic,
        'Date and Time': dateTime,
      }),
    );

    setSystolic('120');
    setDiastolic('80');
    setDateTime(getDefaultDateTime());
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
        {' '}
        <Tooltip title="Back to Menu" placement="right">
          <IconButton
            onClick={handleHomeClick}
            sx={{ position: 'absolute', top: 16, left: 16 }}
          >
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Typography variant="h4" sx={{ color: '#333333' }}>
          Add Entry
        </Typography>
        <Card variant="outlined" sx={{ width: '100%', maxWidth: '400px' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                label="Systolic"
                value={systolic}
                onChange={e => setSystolic(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
                variant="outlined"
                select
              >
                {Array.from(Array(401).keys()).map(num => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Disatolic"
                value={diastolic}
                onChange={e => setDiastolic(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
                variant="outlined"
                select
              >
                {Array.from(Array(401).keys()).map(num => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Date and Time"
                type="datetime-local"
                value={dateTime}
                onChange={e => setDateTime(e.target.value)}
                required
                sx={{ marginBottom: 2 }}
                variant="outlined"
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
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
