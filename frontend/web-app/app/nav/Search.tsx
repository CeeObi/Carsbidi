"use client"
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useParamsStore } from '../hooks/useParamsStore'

function Search() {
    const {setParams, setSearchValue, searchValue} = useParamsStore((state) => state);    

    function onChange(event:any) {        
        setSearchValue(event.target.value)
    }

    function handleSearch(event:any) {
        if (event.key && event.key === "Enter"){ setParams({searchTerm:searchValue}) }
        if (!event.key){ setParams({searchTerm:searchValue}) }
    }


  return (
    <div className='flex w-[50%] items-center border-2 rounded-full py-2 shadow-sm'>
        <input type="text" placeholder='search for cars by make, model or color..' 
            value={searchValue}
            onKeyDown={handleSearch}
            onChange={onChange}
            className='flex-grow
                    pl-5 
                    bg-transparent
                    focus:outline-none
                    focus:border-transparent
                    border-transparent
                    focus:ring-0
                    text-sm
                    text-gray-600' 
        />
        <button onClick={handleSearch}><FaSearch size={34} className='bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2'/></button>
    </div>
  )
}

export default Search