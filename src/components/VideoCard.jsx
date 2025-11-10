import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle } from "../utils/constants";
import "./VideoCard.css";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card className="video-card">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          className="video-card-media"
        />
        <CardContent className="video-card-content">
          <Typography variant="body2" className="video-title">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
          <Box className="channel-info">
            <Typography variant="body2" className="channel-title">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle className="channel-verified-icon" />
            </Typography>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;