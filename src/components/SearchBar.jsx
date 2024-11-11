import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase, Grow } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
      setIsOpen(false);
    }
  };

  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Paper
      component='form'
      onSubmit={onHandleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: isOpen ? 2 : 0,
        pr: 1,
        boxShadow: 'none',
        overflow: 'hidden',
        width: isOpen ? { xs: '100%', sm: 250, md:450 ,lg:650 } : 40,
        transition: 'width 0.3s ease',
      }}
    >
      <IconButton onClick={handleIconClick} sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>

      <Grow in={isOpen} timeout={300} mountOnEnter unmountOnExit>
        <InputBase
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            ml: 1,
            flex: 1,
            fontSize: '1rem',
          }}
          autoFocus
        />
      </Grow>
    </Paper>
  );
};

export default SearchBar;
