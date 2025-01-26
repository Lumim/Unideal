import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UniversityContext = createContext();

export const UniversityProvider = ({ children }) => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
   // fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const response = await axios.get('https://your-laravel-api.com/api/universities');
      setUniversities(response.data);
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  };

  return (
    <UniversityContext.Provider value={{ universities }}>
      {children}
    </UniversityContext.Provider>
  );
};