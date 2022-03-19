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
      
      <div>EditArticle</div>

      <div className="container Articleedit">
        <h3>Edit Articles</h3>
        <br />
        <br />
        <form onSubmit={onSubmit}>
          <div > <label>Article Heading</label> <input  value={selectedArticle.heading}   onChange={e => handleOnChange("heading", e.target.value)} />
          </div>
          <div > <label>Sub Heading</label> <textarea  value={selectedArticle.subHeading}   onChange={e => handleOnChange("subHeading", e.target.value)} ></textarea>
          </div>
          <div > <label>Description</label> <textarea  value={selectedArticle.description}   onChange={e => handleOnChange("description", e.target.value)} ></textarea>
          </div>
          <div > <label>Article Category</label> <input  type="text"  value={selectedArticle.category}   onChange={e => handleOnChange("category", e.target.value)} />
          </div>
          <div > <label>Author Name</label> <input   type="text" value={selectedArticle.author}  onChange={e => handleOnChange("author", e.target.value)} />
          </div>
          <button type="submit"> Save Article  </button>
          <Link to="/"> <button type="button">   Cancel </button>
          </Link>
        </form>
      </div>
      </>
  )
}

export default EditArticle