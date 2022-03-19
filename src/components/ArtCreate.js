import React from 'react'
import { useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'

const ArtCreate = () => {
    
    const history = useHistory()
  return (
    <>
        <div>ArtCreate</div>
        <Link><button onClick={()=> history.push("/")}>Go back</button></Link>
    </>
  )
}

export default ArtCreate