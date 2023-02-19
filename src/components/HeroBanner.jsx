import { Typography, Box } from '@mui/material'
import React from 'react'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position="relative" p="20px">
        <Typography color='#FF2625' fontWeight="600" fontSize="26px">
            Fitness club
        </Typography>
        <Typography>
            Sweat, Smile <br /> and Repeat)
        </Typography>
        <Typography fontWeight={700}>
            Check out of the most popular exercises
        </Typography>
    </Box>
  )
}

export default HeroBanner