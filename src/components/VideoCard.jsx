import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants.jsx';
import './VideoCard.css';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card className='video-card'>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        className='video-card-media'
      />
    </Link>
    <CardContent className='video-card-content'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' className='video-title'>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2' className='channel-title'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon className='channel-verified-icon' />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;