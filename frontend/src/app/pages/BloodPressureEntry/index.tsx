/**
 *
 * BloodPressureEntry
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
  Tooltip,
  IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useBloodPressureEntrySlice } from './slice';
import { selectBloodPressureEntry } from './slice/selectors';

interface Props {}

export function BloodPressureEntry(props: Props) {
  const { actions } = useBloodPressureEntrySlice();
  const dispatch = useDispatch();

  const { createDate, error } = useSelector(selectBloodPressureEntry);

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/menu');
  };
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');

  const [touched, setTouched] = useState({
    systolic: false,
    diastolic: false,
  });

  useEffect(() => {
    if (createDate !== '') {
      alert('Save successful!');
      dispatch(actions.entryCreateDate(''));
      navigate('/menu');
    } else if (error) {
      alert(`${error}`);
      dispatch(actions.entryError(''));
      navigate('/entry');
    }
  }, [createDate, error, touched]);

  const handleSubmit = e => {
    e.preventDefault();

    if (systolic && diastolic) {
      dispatch(
        actions.entryData({
          systolic: systolic,
          diastolic: diastolic,
        }),
      );
    } else {
      alert('Please fill in all fields. Only numeric values allowed.');
      setTouched({
        systolic: true,
        diastolic: true,
      });
    }
  };

  const handleBlur = (field: 'systolic' | 'diastolic') => {
    const value = field === 'systolic' ? systolic : diastolic;
    const isNumber = /^[0-9]+$/.test(value);
    setTouched(prevState => ({ ...prevState, [field]: true }));

    if (!isNumber) {
      if (field === 'systolic') {
        setSystolic('');
      } else {
        setDiastolic('');
      }
    }
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
                onChange={e => setSystolic(e.target.value.toString())}
                onBlur={() => handleBlur('systolic')}
                required
                error={!systolic && touched.systolic}
                helperText={
                  !systolic && touched.systolic && 'Systolic value is required'
                }
                sx={{ marginBottom: 2 }}
                variant="outlined"
                data-testid="Systolic"
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
              />

              <TextField
                label="Diastolic"
                value={diastolic}
                onChange={e => setDiastolic(e.target.value.toString())}
                onBlur={() => handleBlur('diastolic')}
                required
                error={!diastolic && touched.diastolic}
                helperText={
                  !diastolic &&
                  touched.diastolic &&
                  'Diastolic value is required'
                }
                sx={{ marginBottom: 2 }}
                variant="outlined"
                data-testid="Diastolic"
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                }}
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
