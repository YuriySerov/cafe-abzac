import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Link, Paper, Snackbar, Alert
} from '@mui/material';
import Timer from '../components/Timer';
import MultiSelect from '../components/MultiSelect';

const Home = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    comment: '' 
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
  const { name, value } = e.target;
  
  let processedValue = value;
  
  // Специальная обработка для поля 'name'
  if (name === 'name') {
    // 1. Удаляем все символы, кроме букв, пробелов и дефисов
    processedValue = value.replace(/[^a-zA-Zа-яА-Я\s-]/g, '');
    // 2. Заменяем множественные пробелы/дефисы на один
    processedValue = processedValue.replace(/\s+/g, ' ').replace(/-+/g, '-').trimStart();
    
    // Если после обработки строка пустая, но пользователь ввел неразрешенный символ - игнорируем
    if (processedValue === '' && value !== '') {
      return;
    }
  } 
  // Обычная обработка для остальных полей
  else {
    // Удаляем лишние пробелы и пробелы в начале
    processedValue = value.replace(/\s+/g, ' ').trimStart();
    
    // Если после обработки строка пустая, но пользователь ввел пробел - игнорируем
    if (processedValue === '' && value === ' ') {
      return;
    }
  }
  
  setFormData(prev => ({
    ...prev,
    [name]: processedValue,
  }));
  
  // Сбрасываем ошибку при изменении
  if (errors[name]) {
    setErrors(prev => ({ ...prev, [name]: false }));
  }
};

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    
    // Разрешаем только цифры и знак +
    let validatedValue = value.replace(/[^0-9+]/g, '');
    
    // Проверяем, чтобы + был только в начале
    if (validatedValue.includes('+') && validatedValue.indexOf('+') !== 0) {
      return;
    }
    
    // Ограничиваем количество символов
    if (validatedValue.length <= 17) {
      setFormData(prev => ({
        ...prev,
        phone: validatedValue
      }));
      
      // Сбрасываем ошибку при изменении
      if (errors.phone) {
        setErrors(prev => ({ ...prev, phone: false }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
    };
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.phone;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
                error={errors.name}
                helperText={errors.name ? "Пожалуйста, введите ваше имя" : ""}
                inputProps={{ 
                  maxLength: 17,
                }}
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 1,
                  '& .MuiFormHelperText-root': {
                    position: 'absolute',
                    bottom: -20,
                  }
                }}
              />

              <TextField
                fullWidth
                placeholder="Ваш телефон"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                error={errors.phone}
                helperText={errors.phone ? "Пожалуйста, введите ваш телефон" : ""}
                inputProps={{ 
                  maxLength: 17,
                  inputMode: 'tel'
                }}
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 1,
                  '& .MuiFormHelperText-root': {
                    position: 'absolute',
                    bottom: -20,
                  }
                }}
              />

              <TextField
                fullWidth
                placeholder="Комментарий (необязательно)"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                inputProps={{ 
                  maxLength: 25,
                }}
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  borderRadius: 1,
                }}
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