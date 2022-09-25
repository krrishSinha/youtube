import React from 'react'
import { useState, useEffect } from 'react'
import { Stack, Box, Typography } from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import axios from 'axios'

import { fetchData } from './Utils/fetchFromApi'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [video, setVideos] = useState([]);

  useEffect(() => {

     fetchData(`search?part=snippet&q=${selectedCategory}`).then((data)=>{
      setVideos(data.items)
    })

   }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box sx={{
        height: { sx: 'auto', md: 'auto' }, borderRight: '1px solid #3d3d3d',
        px: { sx: 0, md: 1 }, py: 3
      }}>

        <SideBar
          selectedCategory={selectedCategory} setSelectedcategory={setSelectedCategory}
        />

        {/* <Typography variant='body2' sx={{ mt: 1.5 }} >
          Copyright 2022 JSM Media
        </Typography> */}
      </Box>


      <Box py={4} px={2} sx={{ overflowY: 'auto', height: 'auto', flex: 2 }}>

        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos video={video} setVideos={setVideos} />
      </Box>
    </Stack>
  )
}

export default Feed