"use client"

import AuctionCard from "./AuctionCard";
import AppPagination from "../components/AppPagination";
import { Auction } from "@/types";
import React, { useEffect, useState } from "react";
import { getData } from "../actions/auctionActions";

 
function Listings() {
    const [auctions,setAuctions] = useState<Auction[]> ([]);
    const [pageNumber,setPageNumber] = useState(1);
    const [pageCount,setPageCount] = useState(1);

    useEffect(() => {
        getData(pageNumber).then((data) => {
                setAuctions(data.results);
                setPageCount(data.pageCount);
        });
    },[pageNumber])


  if (auctions.length === 0){
     return <h3>Loading...</h3>

  } 

  return (
  <>
    <div className="grid grid-cols-4 gap-6">
        {
            auctions.map((result) => (<AuctionCard key={result.id} auction={result} />))
        }
    </div>
    <div className="flex justify-center mt-4">
        <AppPagination currentPage={pageNumber} pageCount={pageCount} changePage={setPageNumber}/>
    </div>
  </>    
  )
}


export default Listings

