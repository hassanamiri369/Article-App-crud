
import {BrowserRouter , Route , Switch } from "react-router-dom"
import ArtList from "./components/ArtList";
import ArtCreate from "./components/ArtCreate";

function App() {
  return (
    <>
      <div className="App">
      Hello
    </div>

    <BrowserRouter>
      <Switch>
        <Route exact path="/"><ArtList/></Route>
        <Route path="/create"><ArtCreate/></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
