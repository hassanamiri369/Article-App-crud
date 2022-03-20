import React , {useEffect , useState , useContext} from 'react'

import { ArticleContext } from '../context/context'
import { useHistory , Link , useParams } from 'react-router-dom'


const EditArticle = () => {
    const history = useHistory()

    const {article , editArticle} = useContext(ArticleContext)
    const [selectedArticle , setSelectArticle] = useState(
        {id : null , category : "" , heading : "" , description : "" , subHeading : "" , author : ""}
    ) 

    const {user} = useParams()

    React.useEffect(()=> {
        const selectedArticle = article.find(x => x.id === user)
        setSelectArticle(selectedArticle)

    } , [])


    const handleOnChange = (keys , val) =>{
        setSelectArticle({...selectedArticle , [keys] : val})
    }

    const onSubmit = e => {
        e.preventDefault()
        editArticle(selectedArticle)
        history.push("/")
    }
  return (
      <>
      
      
      <div className='createArticle'>
        <h2>ArtCreate</h2>
       </div>

      <div className="Form-container">
       
        <form onSubmit={onSubmit}>
          <div  className='formControl' > <label>Category</label> <input placeholder='category'  value={selectedArticle.heading}   onChange={e => handleOnChange("heading", e.target.value)} />
          </div>
          <div className='formControl' > <label>Heading</label> <textarea placeholder='heading'   value={selectedArticle.subHeading}   onChange={e => handleOnChange("subHeading", e.target.value)} ></textarea>
          </div>
          <div className='formControl' > <label>subHeading</label> <textarea className='textEdit' placeholder='subHeading' value={selectedArticle.description}   onChange={e => handleOnChange("description", e.target.value)} ></textarea>
          </div>
          <div className='formControl' > <label>description</label> <input placeholder='description' type="text"  value={selectedArticle.category}   onChange={e => handleOnChange("category", e.target.value)} />
          </div>
          <div  className='formControl'> <label>Author</label> <input placeholder='author'  type="text" value={selectedArticle.author}  onChange={e => handleOnChange("author", e.target.value)} />
          </div>
         <div>
         <button className='createButton1' type="submit"> Save Article  </button>
          <Link to="/"> <button type="button" className='cancelButton'>   Cancel </button> </Link>
         </div>
        </form>
      </div>
      </>
  )
}

export default EditArticle