import React from 'react';
import { Box, CardMedia, Typography, CardContent, Card } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoChannelUrl, demoChannelTitle } from '../utils/constants';
import './ChannelCard.css';

const ChannelCard = ({ channelDetail, marginTop, isDetail }) => {
  const channelSnippet = channelDetail?.snippet;
  
  if (isDetail) {
    return (
      <Box
        sx={{ 
          borderRadius: "50%",
          width: "120px",
          height: "120px",
          overflow: "hidden",
          border: "3px solid white",
          mt: marginTop
        }}
      >
        <CardMedia
          image={channelSnippet?.thumbnails?.high?.url || demoChannelUrl}
          alt={channelSnippet?.title}
          sx={{ 
            width: "100%", 
            height: "100%",
            borderRadius: "50%"
          }}
        />
      </Box>
    );
  }

  return (
    <Box className="channel-card">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent className="channel-card-content">
          <CardMedia
            image={channelSnippet?.thumbnails?.high?.url || demoChannelUrl}
            alt={channelSnippet?.title}
            className="channel-card-media"
          />
          <Typography variant="h6" className="channel-title">
            {channelSnippet?.title || demoChannelTitle}
            <CheckCircle className="channel-verified-icon" />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography className="subscriber-count">
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;