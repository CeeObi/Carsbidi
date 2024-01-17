"use client"

import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { Auction, PagedResult } from "@/types";
import React, { useEffect, useState } from "react";
import { getData } from "../actions/auctionActions";
import Filters from "./Filters";
import { useParamsStore } from "../hooks/useParamsStore";
import { shallow } from "zustand/shallow";
import qs from "query-string";

 
function Listings() {
    // const [auctions,setAuctions] = useState<Auction[]> ([]);
    // const [pageNumber,setPageNumber] = useState(1);
    // const [pageCount,setPageCount] = useState(1);
    // const [pageSize,setPageSize] = useState(4);
    const [data,setData] = useState<PagedResult<Auction>>();
    const params = useParamsStore((state) => ({        
        pageSize: state.pageSize,
        pageNumber: state.pageNumber,
        searchTerm: state.searchTerm,
    }),shallow)

    const setParams = useParamsStore((state) => state.setParams)
    

    const url = qs.stringifyUrl({url:"", query: params})

     
    function setPageNumber(pageNumber: number) {
        setParams({pageNumber});
        
    }

    useEffect(() => {
        getData(url).then((gottenData) => {
            
                console.log(gottenData)   

                setData(gottenData);
                // setPageCount(data.pageCount);
        });
    },[url])


  if (!data){
     return <h3>Loading...</h3>

  }   

  return (
  <>
    <Filters />
    <div className="grid grid-cols-4 gap-6">
        {
            data.results.map((result) => (<AuctionCard key={result.id} auction={result} />))
        }
    </div>
    <div className="flex justify-center mt-4">
        <AppPagination currentPage={params.pageNumber} pageCount={data.pageCount} changePage={setPageNumber}/>
    </div>
  </>    
  )
}


export default Listings

