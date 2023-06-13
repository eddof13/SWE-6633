/**
 *
 * BloodPressureChart
 *
 */
import * as React from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

interface Props {}

export function BloodPressureChart(props: Props) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
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
          Chart Here
        </Typography>
      </Box>
    </Box>
  );
}
