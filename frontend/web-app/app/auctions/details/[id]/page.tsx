import { getDetailedAuction } from '@/app/actions/auctionActions'
import Headings from '@/app/components/Headings'
import React from 'react'
import CountdownTimer from '../../CountdownTimer'
import CarImage from '../../CarImage'
import DetailedSpecs from './DetailedSpecs'
import EditButton from './EditButton'
import { useParamsStore } from '@/app/hooks/useParamsStore'
import { getCurrentUser } from '@/app/actions/authActions'
import DeleteButton from './DeleteButton'

async function Details({params}: {params: {id : string}}) {
  const data = await getDetailedAuction(params.id)
  const user = await getCurrentUser()

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <Headings title={`${data.make} ${data.model}`} />
          {user?.username == data.seller && <>
           <EditButton id={params.id} />
           <DeleteButton id={params.id} />
           </>}
        </div>
        <div className='flex gap-3'>
          <h3 className="text-2xl font-semibold">Time remaining:</h3>
          <CountdownTimer auctionEnd={data.auctionEnd} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-3">
        <div className="w-full bg-gray-200 aspect-h-10 aspect-w-16 rounded-lg overflow-hidden"><CarImage imgUrl={data.imageUrl} /></div>
        <div className="border-2 rounded-lg p-2 bg-gray-100">
          <Headings title='Bids'/>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 rounded-lg"><DetailedSpecs auction={data} /></div>

    </div>
  )
}

export default Details