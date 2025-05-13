import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const MenuItem = ({ item }) => {
  return (
    <Card sx={{
      width: '100%',
      height: '100%', // Занимаем всю высоту родителя
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
      {/* Фиксированная высота для изображения */}
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
        height: '150px', // Фиксированная высота для контента
        boxSizing: 'border-box' // Учитываем padding в высоте
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
            },
            flex: '1 1 auto', // Занимаем все доступное пространство
            overflow: 'hidden', // Скрываем лишний текст
            textOverflow: 'ellipsis', // Добавляем многоточие
            display: '-webkit-box',
            WebkitLineClamp: 3, // Ограничиваем количество строк
            WebkitBoxOrient: 'vertical'
          }}
        >
          {item.name}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{
            fontWeight: 700,
            color: 'primary.main',
            fontSize: '1.1rem',
            mt: 'auto' // Прижимаем цену к низу
          }}
        >
          {item.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MenuItem;