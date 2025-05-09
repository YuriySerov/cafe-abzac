import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ 
      backgroundImage: 'url(/assets/background.png)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 128px)',
      p: 3,
    }}>
      <Paper elevation={3} sx={{ 
        maxWidth: '1000px', 
        mx: 'auto', 
        my: 4,
        overflow: 'hidden',
        borderRadius: '20px',
      }}>
        <Grid container spacing={2}> {/* Добавляем отступ между колонками */}
          {/* Текстовый блок */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              p: 4, 
              backgroundColor: 'primary.main',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: 3, // Отступ между параграфами
            }}>
              <Typography variant="h3" gutterBottom>
                О кафе Абзац
              </Typography>
              
              <Typography paragraph sx={{ mb: 0 }}> {/* Убираем стандартный margin */}
                Кафе Абзац ждет вас с поводом и без него. Приходите к нам после
                насыщенного рабочего дня поужинать в спокойной атмосфере и
                пообщаться с друзьями.
              </Typography>
              
              <Typography paragraph sx={{ mb: 0 }}>
                Стильный интерьер в сдержанном европейском стиле, вкусная кухня,
                большой выбор алкогольных и безалкогольных напитков.
              </Typography>
              
              <Typography paragraph sx={{ mb: 0 }}>
                Кафе Абзац просто жить не может без больших компаний. У нас есть два
                уютнейших банкетных зала: на 120 и 40 человек.
              </Typography>
            </Box>
          </Grid>
          
          {/* Блок с изображениями */}
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              gap: 2, // Отступ между изображениями
              p: 2, // Отступ внутри блока
            }}>
              <img 
                src="/assets/image.avif" 
                alt="Интерьер кафе" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '12px',
                }} 
              />
              <img 
                src="/assets/image1.avif" 
                alt="Интерьер кафе" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '12px',
                }} 
              />
              <img 
                src="/assets/image2.avif" 
                alt="Интерьер кафе" 
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  borderRadius: '12px',
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default About;