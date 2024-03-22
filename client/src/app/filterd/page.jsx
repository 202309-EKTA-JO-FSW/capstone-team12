"use client"

import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';

const EventsPage = () => {

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default EventsPage;