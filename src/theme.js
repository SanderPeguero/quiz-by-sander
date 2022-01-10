import { red } from '@material-ui/core/colors';
import { createTheme }from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4d55761',
        },

        secondary: {
            main: '#19857b',
        },
        
        error: {
            main: red.A400,
        },

        background: {
            default: 'rgb(38, 48, 59)',
        },

        text: {
            primary: '#fff'
        }
    },

    overrides: {
        MuiButton: {
            outlined: {
                border: "2px solid rgba(0, 0, 0, 0.23"
            },
        }
    }
});

export default theme;