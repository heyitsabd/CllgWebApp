import React from 'react'
import { useParams } from 'react-router-dom'

function CollegePage() {
    const { id } = useParams();
  return (
    
    <div>
        <h1>{id}</h1>
      Hii
    </div>
  )
}

export default CollegePage
