import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(sec => sec - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      setIsActive(false);
      alert('Время вышло!');
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(10);
  };

  return (
    <Box sx={{ 
      p: 3, 
      border: '1px solid #ccc', 
      borderRadius: '8px',
      maxWidth: '300px',
      textAlign: 'center',
      mt: 4
    }}>
      <Typography variant="h5" gutterBottom>
        Таймер: {seconds} сек
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button 
          variant="contained" 
          onClick={handleStart}
          disabled={isActive}
        >
          Старт
        </Button>
        <Button 
          variant="outlined" 
          onClick={handleReset}
        >
          Сброс
        </Button>
      </Box>
    </Box>
  );
};

export default Timer;