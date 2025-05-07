import React from 'react';
import { Card, CardContent, Typography, Rating } from '@mui/material';

const ReviewCard = ({ review }) => {
  return (
    <Card sx={{ 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgba(90, 46, 30, 0.9)',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" component="div" sx={{ color: 'secondary.main' }}>
          {review.name}
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          {review.text}
        </Typography>
        <Rating 
          value={review.rating} 
          readOnly 
          sx={{ color: 'gold' }} 
        />
      </CardContent>
    </Card>
  );
};

export default ReviewCard;