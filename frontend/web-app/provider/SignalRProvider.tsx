"use client"
import useActionStore from '@/app/hooks/useAuctionStore'
import useBidStore from '@/app/hooks/useBidStore'
import { Bid } from '@/types'
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr'
import React, { ReactNode, useEffect, useState } from 'react'

type Props = {
    children: ReactNode
}


function SignalRProvider({children}:Props) {
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const {setCurrentPrice} = useActionStore((state) => state);
    const {addBid} = useBidStore((state) => state)

    useEffect(()=>{
        const newConnection = new HubConnectionBuilder().withUrl("http://localhost:6001/notifications").withAutomaticReconnect().build();
        setConnection(newConnection)
    },[])


    useEffect(() => {
        if(connection){
            connection.start()
            .then(()=>{
                console.log("Connected to notification hub");
                connection.on("BidPlaced",(bid: Bid)=>{
                    console.log("Bid Placed event received");
                    if (bid.bidStatus.includes("Accepted")){
                        setCurrentPrice(bid.auctionId, bid.amount)
                    }

                })
            })
            .catch((e)=>{console.log(e)})
        }
        return () =>{connection?.stop()};

    },[connection, setCurrentPrice])



  return (
    children
  )
}

export default SignalRProvider