import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return isVisible ? (
    <IconButton
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: '40px',
        right: '30px',
        backgroundColor: 'secondary.main',
        color: 'white',
        '&:hover': {
          backgroundColor: 'secondary.dark',
        },
        width: '50px',
        height: '50px',
      }}
    >
      <KeyboardArrowUpIcon fontSize="large" />
    </IconButton>
  ) : null;
};

export default ScrollToTop;