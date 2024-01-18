"use client"
import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'
import { useParamsStore } from '../hooks/useParamsStore'

function Logo() {
    const reset = useParamsStore((state) => state.reset)

    function resetStore() {
      reset()
    }
  return (
    <div onClick={resetStore} className="cursor-pointer flex gap-2 text-3xl items-center font-semibold text-green-500">
    <AiOutlineCar size={34} />
    <div>Carsbidi Auctions</div>
  </div>
  )
}

export default Logo