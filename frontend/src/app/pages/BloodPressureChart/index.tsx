import React, { useState, useEffect } from 'react';
import {
  ComposedChart,
  Bar,
  Legend,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { Tooltip as MuiTooltip } from '@mui/material';
import { selectBloodPressureChart } from './slice/selectors';
import { useSelector } from 'react-redux';

interface Props {}

export function BloodPressureChart(props: Props) {
  const { data } = useSelector(selectBloodPressureChart);

  const sortedData = data
    ? data.slice().sort((a, b) => {
        return (
          new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
        );
      })
    : [];

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate('/menu');
  };

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const hFactor = screenHeight > screenWidth ? 0.5 : 0.8;
  const bFactor = screenWidth < 600 ? 15 : 30;

  const chartFontFamily = 'Roboto, sans-serif';
  const [startIndex, setStartIndex] = useState(0);
  const [chartWidth, setChartWidth] = useState(screenWidth);
  const [bWidth, setBWidth] = useState(bFactor);
  const [chartHeight, setChartHeight] = useState(screenHeight * hFactor);

  const handleClickLeft = () => {
    if (startIndex + 7 < sortedData.length) {
      setStartIndex(startIndex + 7);
    }
  };

  const handleClickRight = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 7);
    }
  };

  const displayedData = sortedData.slice(startIndex, startIndex + 7).reverse();

  const getXAxisTick = (value: string) => {
    const date = value.substring(5, 10);
    return date;
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const hFactor = screenHeight > screenWidth ? 0.5 : 0.8;
      const bFactor = screenWidth < 600 ? 15 : 30;

      setChartWidth(screenWidth);
      setChartHeight(screenHeight * hFactor);
      setBWidth(bFactor);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [window.innerWidth, window.innerHeight]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {' '}
        <MuiTooltip title="Back to Menu" placement="right">
          <IconButton
            onClick={handleHomeClick}
            sx={{ position: 'absolute', top: 16, left: 16 }}
          >
            <HomeIcon />
          </IconButton>
        </MuiTooltip>
        <Typography variant="h4" style={{ fontFamily: chartFontFamily }}>
          BP Chart
        </Typography>
        <div>
          <ComposedChart
            width={chartWidth}
            height={chartHeight}
            data={displayedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="createDate"
              tick={{ fontFamily: chartFontFamily, fontSize: 12 }}
              tickFormatter={getXAxisTick}
            />
            <YAxis tick={{ fontFamily: chartFontFamily, fontSize: 12 }} />
            <Tooltip
              contentStyle={{ fontFamily: chartFontFamily, fontSize: 12 }}
              labelStyle={{ fontFamily: chartFontFamily, fontSize: 12 }}
              itemStyle={{ fontFamily: chartFontFamily, fontSize: 12 }}
            />

            <Legend
              wrapperStyle={{ fontFamily: chartFontFamily, fontSize: 12 }}
              align="right"
            />
            <Area
              type="monotone"
              dataKey="systolic"
              stackId="1"
              stroke="#B8860B"
              fill="none"
              legendType="none"
            />
            <Area
              type="monotone"
              dataKey="diastolic"
              stackId="2"
              stroke="#808080"
              fill="none"
              legendType="none"
            />
            <Bar dataKey="systolic" fill="#B8860B" barSize={bWidth} />
            <Bar dataKey="diastolic" fill="#808080" barSize={bWidth} />
          </ComposedChart>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <IconButton
              onClick={handleClickLeft}
              disabled={startIndex + 7 >= sortedData.length}
              sx={{ marginRight: 2, borderRadius: 0 }}
            >
              <Typography variant="body2" sx={{ marginRight: 1 }}>
                PREV
              </Typography>
              <ArrowLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleClickRight}
              disabled={startIndex === 0}
              sx={{ marginRight: 2, borderRadius: 0 }}
            >
              <ArrowRightIcon />
              <Typography variant="body2" sx={{ marginLeft: 1 }}>
                NEXT
              </Typography>
            </IconButton>
          </Box>
        </div>
      </Box>
    </Box>
  );
}
