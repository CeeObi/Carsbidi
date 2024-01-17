import { Button, ButtonGroup } from 'flowbite-react';
import React from 'react'
import { useParamsStore } from '../hooks/useParamsStore';

const pageSizeButtons = [4, 8, 12];


function Filters() {
  const pageSize = useParamsStore((state) => state.pageSize);
  const setParams = useParamsStore((state) => state.setParams)


  return (
    <div className='flex justify-between items-center mb-4'>
      <div>
        <span className='uppercase text-sm text-gray-500 mr-2'>Page Size</span>  
        <ButtonGroup>
            {
                pageSizeButtons.map((val,indx) => <Button key={indx} className='focus:ring-0' color={pageSize===val ? "red" : "gray"} onClick={() => setParams({pageSize: val})}>{val}</Button> )
            }
        </ButtonGroup> 
        </div>
    </div>
  )
}

export default Filters;