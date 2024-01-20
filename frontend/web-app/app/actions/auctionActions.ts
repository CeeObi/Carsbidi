"use server"

import { Auction, PagedResult } from "@/types";
import { del, get, post, put } from "@/lib/fetchWrapper";
import { FieldValues } from "react-hook-form";


export async function getData(query : string): Promise<PagedResult<Auction>>  {
    return  await get(`search/${query}`)  
  }


export async function updateAuctionTest() {
  const data = {mileage: Math.floor(Math.random() * 100000)+ 1}
  return await put("auctions/afbee524-5972-4075-8800-7d1f9d7b0a0c", data)
}


export async function createAuction(data: FieldValues) {
  return await post("auctions", data)
}

export async function getDetailedAuction(id: string):Promise<Auction> {
  return await get(`auctions/${id}`)
}
  