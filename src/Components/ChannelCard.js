import React from 'react'
import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Link} from 'react-router-dom'

import { demoProfilePicture } from './Utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  ,boxShadow: 'none', BorderRadius: '20px', margin: 'auto', width: { xs: '80vw', sm: '40vw', md: '230px' } , height: { xs: '250px', sm: 'auto' }, marginTop: `${marginTop}` }} >

      <Link to={`/channel/${channelDetail?.id?.channelId}`} >
        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}} >
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius: '50%', height: '180px', width: '180px', border: '1px solid #e3e3e3'}}
          />
        </CardContent>

        <Typography variant='h6' sx={{color: '#fff', textAlign: 'center', textDecoration: 'none' }} >
          {channelDetail?.snippet?.title}
          <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5px' }} />
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant='h6' sx={{color: 'gray', textAlign: 'center'}} >
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        ) }
      </Link>

    </Box>
  )
}

export default ChannelCard