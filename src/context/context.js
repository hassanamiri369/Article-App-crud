import React , {createContext , useReducer} from "react"

export const ArticleContext = createContext()

const initState = {
    article : []
}

const reducer = (state , action) =>{
    switch(action.type){

        // create 
        // delete
        // edit
        default :
            return state;
    }
}

const ArticleProvider = (props) => {

    const [state , dispatch] = useReducer(reducer , initState)

    const createArticle = article =>    dispatch({type : "createArticle" , payload : article})  

    const deleteArticle = article =>    dispatch({type : "deleteArticle" , payload : article})

    const editArticle = article  =>     dispatch({type : "editArticle" , payload : article})

    const value = { state : state.article , createArticle , deleteArticle , editArticle}

    return(
        <ArticleContext.Provider value={value}>
            {props.children}
        </ArticleContext.Provider>
    )
}
export default ArticleProvider

