
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import React from 'react'

function App() {
  let [activeComp, setActiveComp] = React.useState("list") //Possible values are editor, list, login, signup
  
  let compObj = {
    "editor": (<Editor activeComp={activeComp} setActiveComp={setActiveComp}/>),
    "list":(<NoteList activeComp={activeComp} setActiveComp={setActiveComp}/>)
  }
  
  let comp = compObj[activeComp];
  
  return (
    <div className="App">

      {comp}

    </div>
  );
}

export default App;
