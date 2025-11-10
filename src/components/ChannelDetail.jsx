import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "./ChannelDetail.css";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [activeTab, setActiveTab] = useState("Videos");

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box className="channel-detail-container">
      {/* Channel Banner */}
      <Box className="channel-banner" />
      
      {/* Channel Info */}
      <Box className="channel-info-container">
        <Stack direction="row" alignItems="flex-end" spacing={2} className="channel-info">
          <ChannelCard channelDetail={channelDetail} marginTop="0" isDetail={true} />
          
          <Box className="channel-text-info">
            <Typography variant="h5" className="channel-title">
              {channelDetail?.snippet?.title} 
              <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
            </Typography>
            
            <Typography variant="body2" className="channel-sub-count">
              {channelDetail?.statistics?.subscriberCount?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} subscribers
            </Typography>
          </Box>
          
          <Button variant="contained" className="subscribe-btn">
            Subscribe
          </Button>
        </Stack>
      </Box>
      
      {/* Channel Tabs */}
      <Box className="channel-tabs">
        <Stack direction="row" className="tabs-container">
          <Button 
            className={`tab-btn ${activeTab === "Videos" ? "active" : ""}`}
            onClick={() => setActiveTab("Videos")}
          >
            Videos
          </Button>
          <Button 
            className={`tab-btn ${activeTab === "Playlists" ? "active" : ""}`}
            onClick={() => setActiveTab("Playlists")}
          >
            Playlists
          </Button>
          <Button 
            className={`tab-btn ${activeTab === "Community" ? "active" : ""}`}
            onClick={() => setActiveTab("Community")}
          >
            Community
          </Button>
          <Button 
            className={`tab-btn ${activeTab === "Channels" ? "active" : ""}`}
            onClick={() => setActiveTab("Channels")}
          >
            Channels
          </Button>
          <Button 
            className={`tab-btn ${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </Button>
        </Stack>
      </Box>
      
      {/* Videos Section */}
      <Box className="videos-container">
        <Videos videos={videos} direction="column" />
      </Box>
    </Box>
  );
};

export default ChannelDetail;