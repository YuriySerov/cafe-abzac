import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const MenuItem = ({ item }) => {
  return (
    <Card sx={{
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: 'translateY(0)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        '& .MuiCardMedia-root': {
          transform: 'scale(1.05)'
        }
      }
    }}>
      {/* Контейнер для изображения с overflow: hidden */}
      <Box sx={{
        width: '100%',
        height: '200px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <CardMedia
          component="img"
          image={item.image}
          alt={item.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
        />
      </Box>

      <CardContent sx={{
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}>
        <Typography 
          variant="subtitle1" 
          sx={{
            fontWeight: 600,
            mb: 1,
            wordBreak: 'break-word',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: 'primary.main'
            }
          }}
        >
          {item.name}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{
            mt: 'auto',
            fontWeight: 700,
            color: 'primary.main',
            fontSize: '1.1rem'
          }}
        >
          {item.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItem;