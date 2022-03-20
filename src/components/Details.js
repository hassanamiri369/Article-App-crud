import React , {useContext , useState} from 'react'
import { useParams , Link } from 'react-router-dom'

import { ArticleContext } from "../context/context"

const Details = () => {
    const [oneArticle , setOneArticle] = useState("")
    const {article} = useContext(ArticleContext)
   
    const {id} = useParams()

    React.useEffect(()=>{
        const userArticle = article.find(x => x.id === id)
        console.log(userArticle)
        setOneArticle(userArticle)
    } , [])

  return (
    <>
        <div className='GoBackButton'>
          <h1>Details</h1>
          <Link to="/"><button>Go back</button></Link>
        </div>
        {/* <p>id : {id}</p> */}
        
        <div className='detailContainer'>
            <div className='detailsInfo'>
            <h2>{oneArticle && oneArticle.category}</h2>
            <h4>{oneArticle && oneArticle.heading}</h4>
            <p>{oneArticle && oneArticle.subHeading}</p>
            <p>{oneArticle && oneArticle.description}</p>
            <h5>{oneArticle && oneArticle.author}</h5>
            </div>
        </div>
    </>
  )
}

export default Details