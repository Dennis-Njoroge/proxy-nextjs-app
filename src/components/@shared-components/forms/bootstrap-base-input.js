import {styled} from "@mui/material/styles";
import {alpha, InputBase} from "@mui/material";
import TextField from "@mui/material/TextField";

const BootstrapInput = styled((props) => (
    <TextField  {...props} />
))(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    width: '100%',
    '& .MuiInputBase-input': {
        borderRadius: 4,
        margin: 0,

        position: 'relative',
        //backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        // border: '1px solid',
        // borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 14,
        width: '100%',
        //padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        // '&:focus': {
        //    // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //    // borderColor: theme.palette.primary.main,
        // },
    },
}));

export default BootstrapInput;