import React from 'react'
import moment from 'moment'
import { Box, Typography, Avatar } from '@mui/material'
import { JobItemContainer, JobIntro, SkillContainer, JobIntroContainer, JobSkillsContainer } from './styles'

const JobItem = ({job}) => {
    return (
        <JobItemContainer sx={{borderLeft: job?.tags.length > 1 ? '5px solid #10AC88' : ''}}>
            <JobIntro>
                <Avatar sx={{height: '80px', width: '80px'}} src={process.env.PUBLIC_URL + `images/${job.organization}.jpg`}>{job.organization}</Avatar>
                <JobIntroContainer>
                    <Box sx={{display: 'flex', gap: '10px'}}>
                        <Typography style={{color: '#10AC88', fontWeight: '600'}}>{job.organization}</Typography>
                        {job.tags.length > 0 && <Typography style={{fontWeight: '600', fontSize: '14px', color: '#fff', backgroundColor: '#17D5AA', padding: '1px 10px', borderRadius: '10px'}}>{job.tags[0]}</Typography>}
                        {job.tags.length > 1 && <Typography style={{fontWeight: '600', fontSize: '14px', color: '#fff', backgroundColor: '#000', padding: '1px 10px', borderRadius: '10px'}}>{job.tags[1]}</Typography>}
                    </Box>
                    <Typography sx={{fontSize: '18px', color: '#10AC88', fontWeight: '600'}}>{job.title}</Typography>
                    <Box component='div' sx={{display: 'flex', gap: '20px', color: 'grey'}}>
                        <Typography sx={{fontSize: '14px'}}>{moment(job.postDate).fromNow()}</Typography>
                        <Typography sx={{fontSize: '14px'}}>{job.type}</Typography>
                        <Typography sx={{fontSize: '14px'}}>{job.location}</Typography>
                    </Box>
                </JobIntroContainer>
            </JobIntro>
            <JobSkillsContainer>
                    {job?.skills.map((skill) => {return <SkillContainer>{skill}</SkillContainer>})}
            </JobSkillsContainer>
        </JobItemContainer>
    )
}

export default JobItem
