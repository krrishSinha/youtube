import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle, SnippetFolderTwoTone } from '@mui/icons-material'

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle, demoProfilePicture } from './Utils/constants'

const VideoCard = ({ video }) => {

    const videoId = video.id.videoId;
    const snippet = video.snippet;

    return (
        <Card sx={{width: { xs: '80vw', sm: '40vw', md: '230px' } , height: { xs: '250px', sm: 'auto' }, boxShadow: "none", borderRadius: 0 }} >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: '100%', height: '130px', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
            </Link>

            <CardContent sx={{ backgroundColor: '#1e1e1e',width: '100%', height: '100px'}}>

                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} >
                    <Typography variant="subtitle1" fontWeight='bold'
                    sx={{color: '#fff', textDecoration: 'none'}}
                    >
                        {snippet?.title.slice(0,60) || demoVideoTitle(0,60) }
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
                    <Typography variant="subtitle2" fontWeight='bold'
                    sx={{color: 'gray', textDecoration: 'none'}}
                    >
                        {snippet?.channelTitle.slice(0,60) || demoChannelTitle(0,60) }
                        <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>

            </CardContent>
        </Card>
    )
}

export default VideoCard