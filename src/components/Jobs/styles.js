import { styled, createTheme } from '@mui/system' 
import Container, {containerClasses} from '@mui/material/Container';

const theme = createTheme({});

export const JobsContainer = styled(Container)({
    [`&.${containerClasses.root}`] : {
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        marginTop: '30px',
        [theme.breakpoints.down("sm")]: {
            gap: '80px',
            marginTop: '60px'
        },
        [theme.breakpoints.down("md")]: {
            gap: '80px',
            marginTop: '60px'
        }
    }
})
