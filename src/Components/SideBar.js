import React from 'react'
import { Stack } from '@mui/material'
import { categories } from './Utils/constants'
import { useState } from 'react'


const SideBar = ({selectedCategory, setSelectedcategory}) => {

    // const selectedCategory = props.selectedCategory
    // const setSelectedCategory = props.setSelectedCategory

    return (
        <Stack direction='row'
            sx={{ overflow: 'auto', height: { sx: 'auto', md: '100%' }, flexDirection: { md: 'column' } }}
        >
            {categories.map((cat) => {
                return (
                    <button className='category-btn'
                        style={{ background: cat.name === selectedCategory && '#FC1503', color: "#fff" }}
                        onClick={()=>{
                            setSelectedcategory(cat.name)
                        }}
                        >

                        <span style={{ color: cat.name === selectedCategory ? 'white' : 'red' }} >
                            {cat.icon}
                        </span>

                        <span style={{ opacity: cat.name === selectedCategory ? '1' : '0.8' }} >
                            {cat.name}
                        </span>

                    </button>
                )
            })}
        </Stack >
    )
}

export default SideBar