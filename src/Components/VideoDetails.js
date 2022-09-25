import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Videos from './Videos'
import { fetchData } from './Utils/fetchFromApi'

const VideoDetails = () => {

  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null)
  const [video, setVideo] = useState(null)

  useEffect(() => {

    fetchData(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchData(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`)
      .then((data) => setVideo(data.items))

  }, [id])



  if (!videoDetail?.snippet) return (
    <Box minHeight="100vh">
      <Typography color='#fff' variant='h5' fontWeight='bold' p={2} sx={{textAlign: 'center'}} >
        Loading
      </Typography>
    </Box>
  );

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <Box minHeight='95vh'>

      <Stack >

        <Box flex={1} py={3} >
          <Box sx={{ width: '100%' }} >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />

            <Typography color='#fff' variant='h5' fontWeight='bold' p={2} >
              {title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' px={2} sx={{ color: '#fff' }} >

              <Link to={`channel/${channelId}`} >
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff' >
                  {channelTitle}
                  <CheckCircle color='gray' sx={{ fontSize: '12px', marginLeft: '5px' }} />
                </Typography>
              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box p={2}>
          <Typography color='#fff' variant='h5' fontWeight='bold' py={2} sx={{ textAlign: { xs: 'center', md: 'left' } }} >
            Recommended <span style={{ color: '#F31503' }}>videos</span>
          </Typography>
          <Videos video={video} direction='column' />
        </Box>
      </Stack>

    </Box>
  )
}

export default VideoDetails