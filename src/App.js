
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import React from 'react'

function App() {
  let [activeComp, setActiveComp] = React.useState({"name":"list","props":{}}) //Possible values are editor, list, login, signup
  
  let compObj = {
    "editor": (<Editor data={activeComp.props} activeComp={activeComp} setActiveComp={setActiveComp}/>),
    "list":(<NoteList data={activeComp.props} activeComp={activeComp} setActiveComp={setActiveComp}/>)
  }
  
  let comp = compObj[activeComp.name];
  
  return (
    <div className="App">

      {comp}

    </div>
  );
}

export default App;
