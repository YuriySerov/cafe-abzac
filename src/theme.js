import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#84482b', // Основной коричневый цвет
        },
        secondary: {
            main: '#f4a261', // Оранжевый акцентный цвет
        },
        background: {
            default: '#201e1f', // Темный фон
            paper: '#2a2829', // Для карточек
        },
        text: {
            primary: '#ffffff', // Белый текст
            secondary: '#e0e0e0', // Светло-серый текст
        },
    },
    typography: {
        fontFamily: '"Montserrat", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
    },
});

export default theme;