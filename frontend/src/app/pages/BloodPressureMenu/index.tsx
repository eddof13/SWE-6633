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
import { Link } from 'react-router-dom';

interface Props {}

export function BloodPressureMenu(props: Props) {
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
          }}
        >
          <Link
            to="/chart"
            style={{
              textDecoration: 'none',
              color: '#ffffff',
              display: 'block',
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography variant="h6">View Chart</Typography>
            </CardContent>
          </Link>
        </Card>
        <Tooltip title="Logout" placement="left">
          <IconButton
            color="inherit"
            sx={{
              position: 'absolute',
              top: '16px',
              right: '16px',
            }}
            component={Link}
            to="/"
          >
            <LogoutIcon color="error" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
