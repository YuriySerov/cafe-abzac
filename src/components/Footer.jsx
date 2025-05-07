import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, Telegram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'background.paper', 
        color: 'text.primary',
        py: 4,
        px: 2,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Кафе АБЗАЦ
          </Typography>
          <Typography>
            г. Минск, Раковская улица, 18, 220004, цокольный этаж
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Часы работы
          </Typography>
          <Typography>Пн-Чт: 8:00 - 18:00</Typography>
          <Typography>Пт: 8:00 - 23:00</Typography>
          <Typography>Сб-Вс: 10:00 - 23:00</Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Контакты
          </Typography>
          <Typography>
            <Link href="tel:+375296730130" color="inherit">+375 (29) 673-01-30</Link>
          </Typography>
          <Typography>
            <Link href="tel:+375297890977" color="inherit">+375 (29) 789-09-77</Link>
          </Typography>
          
          <Box sx={{ mt: 1 }}>
            <IconButton href="https://t.me/YuriySerov" target="_blank" color="inherit">
              <Telegram />
            </IconButton>
            <IconButton href="viber://chat?number=%2B375296730130" color="inherit">
              <img src="/assets/viber.png" alt="Viber" style={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton href="https://www.instagram.com/yourusername" target="_blank" color="inherit">
              <Instagram />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        © {new Date().getFullYear()} Кафе АБЗАЦ. Все права защищены.
      </Typography>
    </Box>
  );
};

export default Footer;