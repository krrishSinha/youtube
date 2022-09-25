import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchData } from './Utils/fetchFromApi'

const ChannelDetails = () => {

  const { id } = useParams();

  const [channelDetail, setChannelDetails] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {

    fetchData(`channels?part=snippet%2Cstatistics&id=${id}`)
      .then((data) => setChannelDetails(data?.items[0]))

    fetchData(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items) )

  }, [id])


  return (

    <Box minHeight='95vh' >

      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,136,159,1) 100%)',
            height: '250px',
            margin: '20px 0px'
          }}
        >
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>

      <Box sx={{marginTop: '50px', padding: '10px 20px' }} >
        <Videos video={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetails