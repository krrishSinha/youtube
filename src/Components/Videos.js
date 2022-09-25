import React from 'react'
import {Stack, Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({video, direction}) => {

  if(!video?.length) return 'Loading...'

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='space-evenly' sx={{gap: {xs: '30px' ,md: '15px'}}} >

      {video.map((item, id)=>{
        return(

          <Box key={id}>
            {item.id.videoId && <VideoCard video={item} /> }
            {item.id.channelId && <ChannelCard channelDetail={item} /> }
          </Box>

        )
      })}

    </Stack>
  )
}

export default Videos