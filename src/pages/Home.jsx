import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Link, Paper, Snackbar, Alert
} from '@mui/material';
import Timer from '../components/Timer';
import MultiSelect from '../components/MultiSelect';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', comment: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправка данных:', formData);
    setFormData({ name: '', phone: '', comment: '' });
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{
      backgroundImage: 'url(/assets/background.png)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 128px)',
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          maxWidth: '1200px',
          width: '100%',
          alignItems: 'stretch',
          gap: 4,
        }}
      >
        {/* Левый блок - текст */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: 500, mb: 4, lineHeight: 1.3 }}>
            Добро пожаловать в кафе АБЗАЦ, где каждая чашка кофе рассказывает богатую историю и полна страсти!
          </Typography>

          <Button
            variant="contained"
            href="/menu"
            sx={{
              borderRadius: '65px',
              py: 2,
              fontSize: '1.2rem',
              maxWidth: '350px',
              mb: 4,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          >
            НАШЕ МЕНЮ
          </Button>

          <Box>
            <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
              Оставить сообщение или позвоните нам!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Link
                href="tel:+375297890977"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <img
                  src="/assets/whatsup.png"
                  alt="WhatsApp"
                  style={{
                    width: 24,
                    height: 24,
                    transition: 'transform 0.3s ease',
                  }}
                />
                <Typography sx={{ color: 'white' }}>+375 (29) 789-09-77</Typography>
              </Link>

              <Link
                href="tel:+375296730130"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <img
                  src="/assets/whatsup.png"
                  alt="WhatsApp"
                  style={{
                    width: 24,
                    height: 24,
                    transition: 'transform 0.3s ease',
                  }}
                />
                <Typography sx={{ color: 'white' }}>+375 (29) 673-01-30</Typography>
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Правый блок - форма */}
        <Box sx={{ flex: '0 0 400px' }}>
          <Paper elevation={3} sx={{
            p: 4,
            borderRadius: '20px',
            backgroundColor: 'primary.main',
            height: '100%',
          }}>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
              Заказать звонок
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Ваше имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                inputProps={{ maxLength: 17 }}
                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}
              />

              <TextField
                fullWidth
                placeholder="Ваш телефон"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                inputProps={{ maxLength: 17 }}
                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}
              />

              <TextField
                fullWidth
                placeholder="Комментарий"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                inputProps={{ maxLength: 25 }}
                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 1 }}
              />

              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ mt: 2, py: 1.5, fontSize: '1.1rem' }}
              >
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Низ страницы — таймер и множественный выбор */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 6,
          width: '100%',
          maxWidth: '1200px',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box sx={{ flex: 1, minWidth: 280 }}>
          <Timer />
        </Box>
        <Box sx={{ flex: 1, minWidth: 280, display: 'flex', justifyContent: 'flex-end' }}>
          <MultiSelect />
        </Box>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Заявка успешно отправлена!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
