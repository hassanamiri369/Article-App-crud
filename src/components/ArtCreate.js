import React , {useContext , useState} from 'react'
import { Link } from 'react-router-dom'
import { ArticleContext } from "../context/context"
import nextId from "react-id-generator";
import { useHistory } from 'react-router-dom'



const ArtCreate = () => {
    

    const {createArticle} = useContext(ArticleContext)
    const history = useHistory()

    const [category , setCategory] = useState("")
    const [heading , setHeading] = useState("")
    const [subHeading , setSubHeading] = useState("")
    const [description , setDescription] = useState("")
    const [author ,setAuthor] = useState("")

    const handleSubmit = (e)=>{

        e.preventDefault()
        const newArticle = {id : nextId() , category , heading , subHeading ,description , author}
        createArticle(newArticle)
        history.push("/")
    }


   
  return (
    <>
        <div>ArtCreate</div>
        <Link><button onClick={()=> history.push("/")}>Go back</button></Link>

        <div>
            <form onSubmit={handleSubmit}>

                <div className='formControl'>
                    <label>category</label>
                    <input  required="required" placeholder='category' type="text" value={category} onChange={(e)=> setCategory(e.target.value)}  />
                </div>

                <div className='formControl'>
                    <label>heading</label>
                    <input required="required" placeholder='heading' type="text" value={heading} onChange={(e)=> setHeading(e.target.value)}  />
                </div>

                <div className='formControl'>
                    <label>subHeading</label>
                    <input required="required" placeholder='subHeading' type="text" value={subHeading} onChange={(e)=> setSubHeading(e.target.value)}  />
                </div>

                <div className='formControl'>
                    <label>description</label>
                    <input required="required" placeholder='description' type="text" value={description} onChange={(e)=> setDescription(e.target.value)}  />
                </div>

                <div className='formControl'>
                    <label>author</label>
                    <input required="required" placeholder='author' type="text" value={author} onChange={(e)=> setAuthor(e.target.value)}  />
                </div>
                <button type='submit'>create</button>
                <Link to="/"><button>cancel</button></Link>
            </form>
        </div>
    </>
  )
}

export default ArtCreate