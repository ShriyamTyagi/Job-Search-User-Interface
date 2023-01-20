import React, { useState, useEffect } from 'react'
import { FilterOptions } from '../../utils/FilterOptions'
import { JobsContainer } from './styles';
import { JobsData } from '../../utils/JobsData';
import JobItem from '../JobItem';
import JobsFilter from '../JobsFilter';

const orderJobs = (jobs) => {
    const featured = jobs.filter((job) => job.tags.includes('FEATURED'));
    const newJobs = jobs.filter((job) => job.tags.includes('NEW!') && !job.tags.includes('FEATURED'));
    const remainingJobs = jobs.filter((job) => !job.tags.includes('NEW!') && !job.tags.includes('FEATURED'));
    
    return [...featured, ...newJobs, ...remainingJobs]
}

const Jobs = () => {
    const [filteredJobs, setFilteredJobs] = useState(orderJobs(JobsData));
    const [availableOptions, setAvailableOptions] = useState(FilterOptions);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [showOptions, setShowOptions] = useState(false)

    const addFilter = (item) => {
        let newSelectedOptions = selectedOptions;
        newSelectedOptions.push(item);
        let newAvailableOptions = availableOptions
        newAvailableOptions = newAvailableOptions.filter((option) => option !== item);
        setSelectedOptions(newSelectedOptions);
        setAvailableOptions(newAvailableOptions);
        let newJobs = filteredJobs;
        newJobs = newJobs.filter((job) => job.skills.includes(item));
        newJobs = orderJobs(newJobs)
        setFilteredJobs(newJobs);
    }

    const removeFilter = (item) => {
        let newAvailableOptions = availableOptions;
        newAvailableOptions.push(item);
        let newSelectedOptions = selectedOptions;
        newSelectedOptions = newSelectedOptions.filter((option) => option !== item);
        setSelectedOptions(newSelectedOptions);
        setAvailableOptions(newAvailableOptions);
        let newJobs = [];
        JobsData.map((Job) => newSelectedOptions.every(elem => Job.skills.includes(elem)) && newJobs.push(Job));
        newJobs=orderJobs(newJobs);
        setFilteredJobs(newJobs);
    }

    const clearFilters = () => {
        setSelectedOptions([]);
        setAvailableOptions(FilterOptions);
        setFilteredJobs(orderJobs(JobsData));
    }
        

    return (
        <React.Fragment>
                <JobsFilter 
                    selectedOptions={selectedOptions}
                    availableOptions={availableOptions}
                    addFilter={addFilter}
                    removeFilter={removeFilter}
                    clearFilters={clearFilters}
                    showOptions={showOptions}
                    setShowOptions={setShowOptions}
                />
            <JobsContainer>
                {filteredJobs.length > 0 ? 
                <>
                    {filteredJobs.map((job) => {
                        return <JobItem key={job.jobId} job={job}/>
                    })}
                </>
                : 
                <>No Jobs Found</> }
            </JobsContainer>
        </React.Fragment>
    )
}

export default Jobs
