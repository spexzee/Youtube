// ParseDescription.js
import { Link } from '@mui/material';
import React from 'react';

const parseDescription = (text) => {
  const urlPattern = /(https?:\/\/[^\s]+)/g;
  const timePattern = /\(\d{2}:\d{2}\)/g;

  const parts = text.split(/(https?:\/\/[^\s]+|\(\d{2}:\d{2}\))/g);

  return parts.map((part, index) => {
    if (part.match(urlPattern)) {
      return <Link key={index} href={part} target="_blank" rel="noopener">{part}</Link>;
    }
    if (part.match(timePattern)) {
      return (
        <Link key={index} href={`#${part}`} style={{ color: '#FF6347', fontWeight: 'bold' }}>
          {part}
        </Link>
      );
    }
    return part;
  });
};

export default parseDescription;
