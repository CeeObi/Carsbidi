// import { getSession } from 'next-auth/react'
import React from 'react'
import Headings from '../components/Headings'
import { getSession } from '../actions/authActions'




async function session() {
  const session = await getSession()
  console.log(session);


  return (
    <div>
        <Headings title={'Session dashboard'} />
        <div className="bg-blue-200 border-2 border-blue-500">
            <h3 className='text-lg'>Session Data</h3>
            <pre>{JSON.stringify(session,null,2)}</pre>
        </div>
    </div>
  )
}

export default session