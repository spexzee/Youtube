import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants.jsx';
import './ChannelCard.css';

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    className='channel-card'
    style={{ marginTop }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent className='channel-card-content'>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          className='channel-card-media'
        />
        <Typography variant="h6" className='channel-title'>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon className='channel-verified-icon' />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography className='subscriber-count'>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
