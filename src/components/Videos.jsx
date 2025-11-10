import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack 
      direction={direction || "row"} 
      flexWrap="wrap" 
      justifyContent="start" 
      alignItems="start" 
      gap={2}
      sx={{
        flexDirection: direction === "column" ? "column" : "row",
      }}
    >
      {videos.map((item, idx) => (
        <Box 
          key={idx} 
          sx={{
            width: direction === "column" ? "100%" : "auto",
            maxWidth: direction === "column" ? "100%" : "320px",
          }}
        >
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;