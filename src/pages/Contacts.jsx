import React from 'react';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemText, Link, IconButton } from '@mui/material';
import { Telegram, Instagram } from '@mui/icons-material';

const Contacts = () => {
  const schedule = [
    { day: 'Понедельник', time: '8:00 - 18:00' },
    { day: 'Вторник', time: '8:00 - 18:00' },
    { day: 'Среда', time: '8:00 - 18:00' },
    { day: 'Четверг', time: '8:00 - 18:00' },
    { day: 'Пятница', time: '8:00 - 23:00' },
  ];

  return (
    <Box sx={{ 
      backgroundImage: 'url(/assets/background.png)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 128px)',
      p: 3,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '1400px',
        gap: '50px', // Отступ между блоками
      }}>
        {/* Карта - левый блок */}
        <Paper elevation={3} sx={{ 
          flex: 1,
          minHeight: '500px',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
        }}>
          <iframe
            title="Кафе АБЗАЦ на карте"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.506459238243!2d27.545904876283554!3d53.90497563277948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfec60d03cad%3A0xb1447193bdcde628!2z0YPQuy4g0KDQsNC60L7QstGB0LrQsNGPIDE4LCDQnNC40L3RgdC6LCDQnNC40L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjA!5e0!3m2!1sru!2sby!4v1740491911580!5m2!1sru!2sby"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '500px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Paper>
        
        {/* График работы - правый блок */}
        <Paper elevation={3} sx={{ 
          flex: 1,
          minHeight: '500px',
          p: 4,
          borderRadius: '20px',
          backgroundColor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'auto',
        }}>
          <Typography variant="h3" gutterBottom>
            Хотите с нами познакомиться? Смотрите наши <strong>часы работы</strong>:
          </Typography>
          
          <List sx={{ flex: 1 }}>
            {schedule.map((item, index) => (
              <ListItem 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
                  py: 2,
                }}
              >
                <ListItemText 
                  primary={item.day} 
                  primaryTypographyProps={{ variant: 'h6' }}
                />
                <ListItemText 
                  primary={item.time} 
                  sx={{ textAlign: 'right' }}
                  primaryTypographyProps={{ variant: 'h6' }}
                />
              </ListItem>
            ))}
          </List>
          
          <Typography variant="h6" sx={{ mt: 2, mb: 3 }}>
            Суббота и воскресенье: c 10:00 до 23:00
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Link href="tel:+375296730130" sx={{ 
              display: 'block', 
              mb: 2,
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.25rem',
              '&:hover': { transform: 'scale(1.02)' },
              transition: 'transform 0.2s',
            }}>
              +375 (29) 673-01-30
            </Link>
            <Link href="tel:+375297890977" sx={{ 
              display: 'block',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '1.25rem',
              '&:hover': { transform: 'scale(1.02)' },
              transition: 'transform 0.2s',
            }}>
              +375 (29) 789-09-77
            </Link>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <IconButton 
              href="https://t.me/YuriySerov" 
              target="_blank" 
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <Telegram fontSize="large" />
            </IconButton>
            <IconButton 
              href="viber://chat?number=%2B375296730130"
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <img src="/assets/viber.png" alt="Viber" style={{ width: 28, height: 28 }} />
            </IconButton>
            <IconButton 
              href="https://www.instagram.com/yourusername" 
              target="_blank"
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' },
              }}
            >
              <Instagram fontSize="large" />
            </IconButton>
          </Box>
          
          <Typography variant="h6">
            📍 г. Минск, Раковская улица, 18, 220004, цокольный этаж
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default Contacts;