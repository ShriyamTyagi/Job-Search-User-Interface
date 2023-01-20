import { styled, createTheme } from '@mui/system';
import Paper, { paperClasses } from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import Container, {containerClasses} from '@mui/material/Container';
import { Typography } from '@mui/material';

const theme = createTheme({});

export const SelectedFilters = styled(Paper)({
    [`&.${paperClasses.root}`] : {
        width: '80%',
        minHeight: '60px',
        boxShadow: '1px 5px 10px #95dbd6',
        padding: '0rem 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            width: '90%'
        },
        [theme.breakpoints.down("md")]: {
            width: '90%'
        }
    }
})

export const SelectedFiltersContainer = styled(Container)({
    [`&.${containerClasses.root}`] : {
        padding: '1rem 0',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '.5rem'
    }
})

export const FilterOptionText = styled(Typography)({
    padding: '2px 2px 2px 10px',
    color: '#17D5AA',
    fontWeight: '600'
})

export const FilterGrid = styled(Paper)({
    [`&.${paperClasses.root}`] : {
        width: '80%',
        minHeight: '60px',
        boxShadow: '1px 5px 10px #95dbd6',
        padding: '0rem 1rem',
        [theme.breakpoints.down("sm")]: {
            width: '90%'
        },
        [theme.breakpoints.down("md")]: {
            width: '90%'
        }
    }
})

export const FilterOptionBox = styled(Box)({
    display: 'flex',
    background: '#E0F9F3',
    borderRadius: '5px',
    gap: '5px',

})

export const FilterClearIcon = styled(ClearIcon)({
    background: '#95dbd6',
    borderRadius: '0 5px 5px 0',
    height: '100%',
    padding: '0 4px',
    color: '#fff',
    cursor: 'pointer',
    '&:hover' : {
        background: '#000',
    }
})

export const FilterAddIcon = styled(AddIcon)({
    background: '#95dbd6',
    borderRadius: '0 5px 5px 0',
    height: '100%',
    padding: '0 4px',
    color: '#fff',
    cursor: 'pointer',
    '&:hover' : {
        background: '#000',
    }
})