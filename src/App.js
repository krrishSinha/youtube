import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ChannelDetails from './Components/ChannelDetails';
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import SearchFeed from './Components/SearchFeed';
import VideoDetails from './Components/VideoDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{backgroundColor: '#000', color: '#fff'}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetails />} />
            <Route path="/channel/:id" exact element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
