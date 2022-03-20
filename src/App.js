
import {BrowserRouter , Route , Switch } from "react-router-dom"
import ArtList from "./components/ArtList";
import ArtCreate from "./components/ArtCreate";
import EditArticle from "./components/EditArticle";
import Details from "./components/Details";
function App() {
  return (
    <>
      

    <BrowserRouter>
      <Switch>
        <Route exact path="/"><ArtList/></Route>
        <Route path="/create"><ArtCreate/></Route>
        <Route path="/detail/:id" ><Details/></Route>
        <Route path="/edit/:user"><EditArticle/></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
