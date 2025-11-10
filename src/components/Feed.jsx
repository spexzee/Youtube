import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const Feed = ({ selectedCategory }) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#000" }}>
        {selectedCategory} <span style={{ color: "#F00" }}>videos</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
