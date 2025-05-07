import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Timer from '../components/Timer';
import MultiSelect from '../components/MultiSelect';

const OrderPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Оформление заказа
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 4,
        flexWrap: 'wrap',
        mt: 4
      }}>
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="h5" gutterBottom align="center">
            Выберите напитки
          </Typography>
          <MultiSelect />
        </Box>
        
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Typography variant="h5" gutterBottom align="center">
            Таймер заказа
          </Typography>
          <Timer />
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPage;