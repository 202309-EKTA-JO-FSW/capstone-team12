"use client"
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
// import axios from 'axios';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterBy from '../components/FilterBy/FilterBy';
// import FilterByPrice from '../components/FilterBy/FilterByPrice';
import { useRouter } from 'next/navigation';


const EventsPage = () => {
  const router = useRouter();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <SearchBar />
        <FilterBy/>
      </div>
    </div>
  );
};

export default EventsPage;