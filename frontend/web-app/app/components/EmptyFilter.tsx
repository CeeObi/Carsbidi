"use client"
import React from 'react'
import { useParamsStore } from '../hooks/useParamsStore'
import Headings from './Headings'
import { Button } from 'flowbite-react'
import { signIn } from 'next-auth/react'

type Props={
    title ?: string,
    subtitle ?: string,
    showReset ?: boolean,
    showLogin ?: boolean,
    callbackUrl: string
}

function EmptyFilter({
    title = "No matches for this filter",
    subtitle = "Try changing settings for this filter",
    showReset,
    showLogin,
    callbackUrl} : Props){
        const reset = useParamsStore((state) => state.reset)


  return (
    <div className='h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg'>
        <Headings title={title} subtitle={subtitle} center />
        <div className='mt-4'>
        {
            showReset && (<Button outline onClick={reset}>Remove Filters</Button>)
        }
        {
            showLogin && (<Button outline onClick={() => signIn("id-server", {callbackUrl})}>Login</Button>)
        }
        </div>

    </div>
  )
}

export default EmptyFilter