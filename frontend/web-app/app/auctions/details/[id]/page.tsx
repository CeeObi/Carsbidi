import React from 'react'

function Details({params}: {params: {id : string}}) {
  return (
    <div>Details for {params.id}</div>
  )
}

export default Details