import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'ГЛАВНАЯ', path: '/' },
    { name: 'НАПИТКИ', path: '/menu' },
    { name: 'КОНТАКТЫ', path: '/contacts' },
    { name: 'О НАС', path: '/about' },
    { name: 'ОТЗЫВЫ', path: '/reviews' },
  ];

  const drawer = (
    <Box sx={{ width: 250, backgroundColor: 'background.default', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            button 
            key={item.name} 
            component={Link} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                backgroundColor: 'secondary.main',
              },
            }}
          >
            <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'background.default', 
        borderBottom: '1px solid white',
        paddingTop: '20px', // Добавьте отступ сверху
        paddingBottom: '10px', // И снизу, если нужно
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', height: '70px' }}>
        <Typography 
          variant="h1" 
          component={Link} 
          to="/" 
          sx={{ 
            textDecoration: 'none', 
            color: 'text.primary',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            lineHeight: 1,
          }}
        >
          <Typography variant="caption" sx={{ fontSize: '1.5rem' }}>
            Кафе
          </Typography>
          АБЗАЦ
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Typography 
              key={item.name} 
              component={Link} 
              to={item.path}
              sx={{ 
                color: 'text.primary', 
                textDecoration: 'none',
                fontWeight: 600,
                '&:hover': {
                  color: 'secondary.main',
                },
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Box>
        
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'background.default',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;