import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid} from '@mui/material';
import MenuItem from '../components/MenuItem';

const drinkCategories = [
  {
    name: "Соки, лимонады, коктейли",
    price: "500ml 4,50 р.",
    image: "/assets/soda1.png"
  },
  {
    name: "Молочные коктейли: клубника, банан, манго",
    price: "750ml 9,00 р.",
    image: "/assets/cappuccino1.png"
  },
  {
    name: "Газированные напитки: Coca-Cola, Fanta, Sprite",
    price: "750ml 4,50 р.",
    image: "/assets/vitamina_manga.png"
  },
  {
    name: "Капучино, латте, флэт-уайт",
    price: "500ml 12,00 р.",
    image: "/assets/chocolate.png"
  },
  {
    name: "Чай: черный, зеленый, красный",
    price: "350ml 5,00 р.",
    image: "/assets/drinks_coqueteu.png"
  },
  {
    name: "Эспрессо, двойной эспрессо, американо",
    price: "350ml 5,00 р.",
    image: "/assets/copo.png"
  }
];

const Menu = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMoreItems = () => {
    setLoading(true);
    setTimeout(() => {
      setItems(prevItems => [...prevItems, ...drinkCategories]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadMoreItems();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
        loadMoreItems();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <Box sx={{ 
      backgroundImage: 'url(/assets/background.png)',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: 'calc(100vh - 128px)',
      p: 3
    }}>
      <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Наше меню
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} sx={{
            display: 'flex',
            maxWidth: '350px', // Фиксированная максимальная ширина
            height: '400px', // Фиксированная высота для всех карточек
            width: '400px' // Фиксированная высота для всех карточек

          }}>
            <MenuItem item={item} />
          </Grid>
        ))}
      </Grid>
      
      {loading && (
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
          Загрузка...
        </Typography>
      )}
    </Box>
  );
};

export default Menu;