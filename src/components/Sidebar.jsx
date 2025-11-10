import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants.jsx';
import './Sidebar.css';

const Sidebar = ({ isOpen, selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      className={`sidebar ${isOpen ? 'open' : ''}`}
      direction="column"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95vh' },
        borderRight: '1px solid #e0e0e0',
        px: isOpen ? 2 : 0,
        width: isOpen ? '240px' : '0px',
        transition: 'width 0.3s',
      }}
    >
      {isOpen && categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            background: category.name === selectedCategory && '#f0f0f0',
            color: '#000',
          }}
          key={category.name}
        >
          <span style={{ color: '#000', marginRight: '15px' }}>
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
