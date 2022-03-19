import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ArticleContext } from "../context/context"


const ArtList = (route) => {

    const {article , deleteArticle , editArticle} = useContext(ArticleContext)

    


  return (
    <>
        <div>ArtList</div>
        <Link to="/create" ><button>create article</button></Link>
        <div className='container'>
         
            {article.map(item => (
                    <div className='articleList' key={item.id}>
                        <p>category : {item.category}</p>
                        <p>heading : {item.heading}</p>
                    
                        <div>
                            <span><button onClick={() => deleteArticle(item)}>delete</button></span>
                            <span><Link to={`/detail/${item.id}`}><button>more info</button></Link></span>
                            <span><Link to={`/edit/${item.id}`}><button onClick={() => editArticle(item)}>edit</button ></Link></span>
                        </div>
                    </div>
                ))}
            
            
               
        </div>
    </>
  )
}

export default ArtList