import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack } from '@mui/material';
import { useState } from "react";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed, Sidebar } from './components';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#fff' }}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Routes>
          <Route exact path='/' element={
            <Stack direction="row">
              <Sidebar isOpen={isSidebarOpen} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
              <Feed selectedCategory={selectedCategory} />
            </Stack>
          } />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
