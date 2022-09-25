import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from './Utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' px={2}
    sx={{backgroundColor: '#000', position: 'sticky', top: '0', justifyContent: 'space-between', color: '#fff'}}>

      <Link to='/' style={{display: 'flex', alignItems: 'center'}} >
        <img src={logo} alt="" height={40} />
      </Link>

      <SearchBar />
    </Stack>
  )
}

export default Navbar