import React, { useState } from 'react';
import { Box, Typography, Grid, Rating, Button, TextField, Paper, Alert } from '@mui/material';
import ReviewCard from '../components/ReviewCard';

const reviews = [
  {
    name: 'Анна',
    text: 'Отличное кафе, вкусный кофе!',
    rating: 5
  },
  {
    name: 'Иван',
    text: 'Очень уютное место, рекомендую!',
    rating: 4
  },
  {
    name: 'Мария',
    text: 'Прекрасное обслуживание, вернусь снова.',
    rating: 5
  },
  {
    name: 'Алексей',
    text: 'Все понравилось, особенно персонал',
    rating: 5
  }
];

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    text: '',
    rating: 0
  });
  const [allReviews, setAllReviews] = useState(reviews);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Удаление лишних пробелов в реальном времени
    let processedValue = value;
    if (name === 'name' || name === 'text') {
      // Заменяем множественные пробелы на один
      processedValue = value.replace(/\s+/g, ' ').trimStart();
      
      // Если после обработки строка пустая, но пользователь ввел пробел - игнорируем
      if (processedValue === '' && value === ' ') {
        return;
      }
    }
    
    setNewReview(prev => ({ ...prev, [name]: processedValue }));
    setError('');
    setSuccess(false);
  };

  const handleRatingChange = (event, newValue) => {
    setNewReview(prev => ({ ...prev, rating: newValue }));
    setError('');
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверка рейтинга
    if (newReview.rating === 0) {
      setError('Пожалуйста, поставьте оценку');
      return;
    }
    
    // Проверка имени
    if (!newReview.name.trim()) {
      setError('Пожалуйста, введите ваше имя');
      return;
    }
    
    // Проверка текста отзыва
    if (!newReview.text.trim()) {
      setError('Пожалуйста, напишите отзыв');
      return;
    }
    
    // Добавление отзыва
    setAllReviews(prev => [...prev, newReview]);
    setNewReview({ name: '', text: '', rating: 0 });
    setSuccess(true);
    setError('');
  };

  return (
    <Box sx={{ 
      backgroundImage: 'url(/assets/background.png)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 128px)',
      p: 3,
    }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Отзывы наших посетителей
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {allReviews.map((review, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ReviewCard review={review} />
          </Grid>
        ))}
      </Grid>
      
      <Paper elevation={3} sx={{ 
        maxWidth: '600px', 
        mx: 'auto', 
        mt: 6, 
        p: 4,
        backgroundColor: 'primary.main',
        borderRadius: '20px',
      }}>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
          Оставьте свой отзыв
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Спасибо за ваш отзыв!
          </Alert>
        )}
        
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Ваше имя"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            margin="normal"
            required
            inputProps={{
              maxLength: 17
            }}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: 1,
            }}
            InputLabelProps={{
              shrink: false,
              style: {
                opacity: newReview.name ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }
            }}
          />
          
          <TextField
            fullWidth
            label="Ваш отзыв"
            name="text"
            value={newReview.text}
            onChange={handleInputChange}
            margin="normal"
            multiline
            rows={4}
            required
            inputProps={{
              maxLength: 50
            }}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: 1,
            }}
            InputLabelProps={{
              shrink: false,
              style: {
                opacity: newReview.text ? 0 : 1,
                transition: 'opacity 0.2s ease',
              }
            }}
          />
          
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 3 }}>
            <Typography component="legend" sx={{ mr: 2 }}>
              Оценка:
            </Typography>
            <Rating
              name="rating"
              value={newReview.rating}
              onChange={handleRatingChange}
              precision={1}
              size="large"
            />
            {newReview.rating === 0 && (
              <Typography color="error" sx={{ ml: 2 }}>
                *
              </Typography>
            )}
          </Box>
          
          <Button 
            type="submit" 
            variant="contained" 
            color="secondary"
            fullWidth
            sx={{ py: 1.5 }}
          >
            Отправить отзыв
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Reviews;