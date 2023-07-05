/**
 *
 * BloodPressureMenu
 *
 */
import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useBloodPressureLoginSlice } from '../BloodPressureLogin/slice';
import { useBloodPressureChartSlice } from '../BloodPressureChart/slice';

interface Props {}

export function BloodPressureMenu(props: Props) {
  const { actions: loginActions } = useBloodPressureLoginSlice();
  const { actions: chartActions } = useBloodPressureChartSlice();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(loginActions.loginUsername(''));
    dispatch(loginActions.loginAccessToken(''));
    dispatch(loginActions.loginTokenType(''));
    navigate('/');
  };

  const handleViewChart = () => {
    dispatch(chartActions.bpData(true));
    navigate('/chart');
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
        <Typography variant="h4" sx={{ marginBottom: 2, color: '#333333' }}>
          Menu
        </Typography>
        <Card
          variant="outlined"
          sx={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#B8860B',
            marginBottom: 2,
          }}
        >
          <Link
            to="/entry"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              display: 'block',
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography variant="h6">Add Entry</Typography>
            </CardContent>
          </Link>
        </Card>
        <Card
          variant="outlined"
          sx={{
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#B8860B',
            cursor: 'pointer',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={handleViewChart}
        >
          <CardContent>
            <Typography variant="h6" color={'white'} align="center">
              View Chart
            </Typography>
          </CardContent>
        </Card>
        <Tooltip title="Logout" placement="left">
          <IconButton
            color="inherit"
            sx={{
              position: 'absolute',
              top: '16px',
              right: '16px',
            }}
            onClick={handleLogout}
          >
            <LogoutIcon color="error" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
