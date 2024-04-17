"use client"
import { store } from '@/Redux/Store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchResultCard from './SearchResultCard';
import { Box, Divider } from '@mui/material';

const SearchResult = ({latitude_key ,longitude_key,setActiveField,area_key}) => {
    const dispatch= useDispatch();
    const {ride}=useSelector(store=>store);

  return (
    <div className='absolute top-10 left-0 right-0 z-10 bg-white rounded-md p-2 border max-h-[50vh] overflow-y-scroll shadow-md hide-scrollbar'>
        {ride.results?.map((item)=> <> <SearchResultCard area_key={area_key} setActiveField={setActiveField} key={item.display_name} item={item} latitude_key={latitude_key} longitude_key={longitude_key} /> <Divider/></>)}
    </div>
  )
}

export default SearchResult