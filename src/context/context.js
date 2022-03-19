import React , {createContext , useReducer} from "react"

import nextId from "react-id-generator";

export const ArticleContext = createContext()

const initState = {
    article : [
        {id : nextId() , category : "Frontend" , heading : "WebDeveloper" , subHeading : "React developer", description : "this is frontend language" , author : "junior"}
    ] ,

   
}

const reducer = (state , action) =>{
    switch(action.type){

        // create 
        case "createArticle":
            return {...state , article : [...state.article , action.payload]}
        // delete
        case "deleteArticle":
            return {...state , article : state.article.filter(item => item.id !== action.payload.id)}
        // edit
        case "editArticle" : 
        const newEditArticle = action.payload;
        const upDataArticle = state.article.map(item => {

            if(item.id === newEditArticle.id){
                return newEditArticle
            }
                return item;
        })

            return {...state , article : upDataArticle}

        default :
            return state;
    }
}

const ArticleProvider = (props) => {

    const [state , dispatch] = useReducer(reducer , initState)


    // action.payload == article === {id : nextId() , category : "Frontend" , heading : "WebDeveloper" , subHeading : "React developer", description : "this is frontend language" , author : "junior"}

    const createArticle = article =>    dispatch({type : "createArticle" , payload : article})  

    const deleteArticle = article =>    dispatch({type : "deleteArticle" , payload : article})

    const editArticle = article  =>     dispatch({type : "editArticle" , payload : article})

    const value = { article : state.article , createArticle , deleteArticle , editArticle}

    return(
        <ArticleContext.Provider value={value}>
            {props.children}
        </ArticleContext.Provider>
    )
}
export default ArticleProvider

