import React from 'react'
import { Link } from 'react-router-dom'


const ArtList = () => {

  return (
    <>
        <div>ArtList</div>
        <Link to="/create" ><button>create article</button></Link>
    </>
  )
}

export default ArtList