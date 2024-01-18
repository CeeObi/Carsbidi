import React from 'react'
import { useParamsStore } from '../hooks/useParamsStore'
import Headings from './Headings'
import { Button } from 'flowbite-react'

type Props={
    title ?: string,
    subtitle ?: string,
    showReset ?: boolean
}

function EmptyFilter({
    title = "No matches for this filter",
    subtitle = "Try changing settings for this filter",
    showReset} : Props){
        const reset = useParamsStore((state) => state.reset)


  return (
    <div className='h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg'>
        <Headings title={title} subtitle={subtitle} center />
        <div className='mt-4'>
        {
            showReset && (<Button outline onClick={reset}>Remove Filters</Button>)
        }
        </div>

    </div>
  )
}

export default EmptyFilter