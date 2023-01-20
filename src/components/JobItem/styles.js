import { styled, createTheme } from '@mui/system' 
import Container, {containerClasses} from '@mui/material/Container';
import Button, {buttonClasses} from '@mui/material/Button';

const theme = createTheme({});

export const JobItemContainer = styled(Container)({
    [`&.${containerClasses.root}`] : {
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: '1px 5px 10px #95dbd6',
        padding: '2rem .5rem',
        background: '#fff',
        borderRadius: '10px',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column'
        },
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column'
        }
    },
})

export const JobIntro = styled(Container)({
    [`&.${containerClasses.root}`] : {
        display: 'flex',
        width: {xs: '100%', sm: '100%', md: '60%'},
        [theme.breakpoints.down("sm")]: {
            marginTop: '-70px',
            flexDirection: 'column',
            gap: '10px'
        },
        [theme.breakpoints.down("md")]: {
            marginTop: '-70px',
            flexDirection: 'column',
            gap: '10px'
        }
    }
})

export const JobIntroContainer = styled(Container)({
    [`&.${containerClasses.root}`] : {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
        flexDirection: 'column',
        padding: '0 0 0 25px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 0 0 5px'
        },
        [theme.breakpoints.down("md")]: {
            padding: '0 0 0 5px'
        }
    },
})

export const SkillContainer = styled(Button)({
    [`&.${buttonClasses.root}`] : {
        height: '30px',
        color: '#17D5AA',
        fontWeight: '550',
        background: '#E0F9F3',
        [`&:hover`] : {
            background: '#17D5AA',
            color: '#fff'
        }
    }
})

export const JobSkillsContainer = styled(Container)({
    [`&.${containerClasses.root}`] : {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        flexWrap: 'wrap',
        gap: '10px',
        [theme.breakpoints.down("sm")]: {
            justifyContent: 'left',
            marginTop: '20px'
        },
        [theme.breakpoints.down("md")]: {
            justifyContent: 'left',
            marginTop: '20px'
        }
    }
})