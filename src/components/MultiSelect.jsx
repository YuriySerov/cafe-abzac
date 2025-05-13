import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  Checkbox, 
  ListItemText,
  Button,
  Paper,
  Divider
} from '@mui/material';

const MultiSelect = () => {
  const [selected, setSelected] = useState([]);
  
  const options = [
    'Кофе',
    'Чай',
    'Капучино',
    'Латте',
    'Сок',
    'Лимонад'
  ];

  const handleToggle = (value) => () => {
    const currentIndex = selected.indexOf(value);
    const newSelected = [...selected];

    if (currentIndex === -1) {
      newSelected.push(value);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelected(newSelected);
  };

  const handleSelectAll = () => {
    if (selected.length === options.length) {
      setSelected([]);
    } else {
      setSelected([...options]);
    }
  };

  const handleSubmit = () => {
    alert(`Вы выбрали: ${selected.join(', ')}`);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: '400px', mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Выберите напитки:
      </Typography>
      
      <Button 
        variant="outlined"
        size="small"
        onClick={handleSelectAll}
        sx={{ mb: 2 }}
      >
        {selected.length === options.length ? 'Снять все' : 'Выбрать все'}
      </Button>
      
      <Divider sx={{ mb: 2 }} />
      
      <List sx={{ maxHeight: '300px', overflow: 'auto' }}>
        {options.map((item) => (
          <ListItem 
            key={item}
            dense
            button
            onClick={handleToggle(item)}
          >
            <Checkbox
              edge="start"
              checked={selected.indexOf(item) !== -1}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      
      <Button 
        variant="contained" 
        onClick={handleSubmit}
        sx={{ mt: 2 }}
        disabled={selected.length === 0}
        fullWidth
      >
        Подтвердить выбор ({selected.length})
      </Button>
    </Paper>
  );
};

export default MultiSelect;