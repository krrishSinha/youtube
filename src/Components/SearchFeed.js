import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { fetchData } from './Utils/fetchFromApi'

const SearchFeed = () => {

  const [video, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {

    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items)
    })

  }, [searchTerm])


  return (
    <Box py={4} px={2} sx={{ overflowY: 'auto', height: 'auto', flex: 2 }}>

      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#F31503' }}> {searchTerm} </span> videos
      </Typography>

      <Videos video={video} setVideos={setVideos} />
    </Box>
  )
}

export default SearchFeed