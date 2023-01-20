import React from 'react'
import { Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FilterAddIcon, FilterClearIcon, FilterGrid, FilterOptionBox, SelectedFilters, SelectedFiltersContainer, FilterOptionText } from './styles'

const JobsFilter = ({selectedOptions,availableOptions,addFilter,removeFilter,clearFilters,showOptions,setShowOptions}) => {
    return (
        <React.Fragment>
            <SelectedFilters>
                {selectedOptions.length > 0 ? 
                    <SelectedFiltersContainer>
                        {selectedOptions.map((item) => {
                            return (
                            <FilterOptionBox>
                                <FilterOptionText>{item}</FilterOptionText>
                                <FilterClearIcon fontSize='small' onClick={() => removeFilter(item)}/>
                            </FilterOptionBox>
                            )
                        })}
                    </SelectedFiltersContainer> : 
                    <Typography onClick={() => setShowOptions(!showOptions)} sx={{color: 'grey'}} variant='h5'>Search Jobs...</Typography>
                }
                {selectedOptions.length > 0 && <ClearIcon sx={{cursor: 'pointer'}} onClick={clearFilters}/>}
                <ExpandMoreIcon sx={{cursor: 'pointer'}} onClick={() => setShowOptions(!showOptions)}/>
            </SelectedFilters>
            <FilterGrid sx={{visibility: showOptions ? 'visible' : 'hidden', marginTop: '5px'}}>
                {availableOptions.length > 0 ?
                    <SelectedFiltersContainer>
                    {availableOptions.map((item) => {
                        return (
                        <FilterOptionBox>
                            <FilterOptionText>{item}</FilterOptionText>
                            <FilterAddIcon fontSize='small' onClick={() => addFilter(item)}/>
                        </FilterOptionBox>
                        )
                    })} 
                    </SelectedFiltersContainer> : 
                    <Typography>No More Options</Typography>
                }
            </FilterGrid>
        </React.Fragment>
    )
}

export default JobsFilter
