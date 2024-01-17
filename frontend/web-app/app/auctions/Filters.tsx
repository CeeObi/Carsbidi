import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react'
const pageSizeButtons = [4, 8, 12];

type Props ={
    pageSize: number,
    setPageSize: (size: number)=> void,
}

function Filters({pageSize,setPageSize}:Props) {
  return (
    <div className='flex justify-between items-center mb-4'>
        <span className='uppercase text-sm text-gray-500 mr-2'>Page Size</span>  
        <ButtonGroup>
            {
                pageSizeButtons.map((val,indx) => <Button key={indx} className='focus:ring-0' color={pageSize===val ? "red" : "gray"} onClick={() => setPageSize(val)}>{val}</Button> )
            }
        </ButtonGroup>  
    </div>
  )
}

export default Filters;