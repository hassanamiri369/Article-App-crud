import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ArticleContext } from "../context/context"


const ArtList = (route) => {

    const {article , deleteArticle , editArticle} = useContext(ArticleContext)

    


  return (
    <>
        <header>
        <span className='header-span'>ARTICLE APPLICATION CRUD</span>
        <Link to="/create" ><button>create article</button></Link>
        </header>
       
        <div className='container'>
         
            {article.map((item , index) => (
                    <div className='articleList' key={item.id}>
                        <p>Number  : {index + 1}</p>
                        <p>Category : {item.category}</p>
                        <p>Heading : {item.heading}</p>
                    
                        <div className='button-group'>
                            <span><button className='deleteButton' onClick={() => deleteArticle(item)}>delete</button></span>
                            <span><Link to={`/edit/${item.id}`}><button className='editButton' onClick={() => editArticle(item)}>edit</button ></Link></span>
                            <span><Link to={`/detail/${item.id}`}><button>more info</button></Link></span>
                        </div>
                    </div>
                ))}
            
            
               
        </div>
    </>
  )
}

export default ArtList