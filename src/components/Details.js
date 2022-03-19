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
        <div>Details</div>
        <Link to="/"><button>Go back</button></Link>
        <p>id : {id}</p>
        <hr/>
        <div className='detailContainer'>
            <p>{oneArticle && oneArticle.category}</p>
            <p>{oneArticle && oneArticle.heading}</p>
            <p>{oneArticle && oneArticle.subHeading}</p>
            <p>{oneArticle && oneArticle.description}</p>
            <p>{oneArticle && oneArticle.author}</p>
        </div>
    </>
  )
}

export default Details