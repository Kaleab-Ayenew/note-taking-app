
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import Login from "./components/Login"
import React from 'react'
import Signup from './components/SignUp';
import SignUpDone from './components/SignUpDone';

function App() {
  let [activeComp, setActiveComp] = React.useState({"name":"login","props":{}}) //Possible values are editor, list, login, signup
  let [userInfo, setUserInfo] = React.useState({})
  let [url, setUrl] = React.useState("http://192.168.43.227:8000")
  let compObj = {
    "editor": (<Editor data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>),
    "list":(<NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>),
    "login":(<Login data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>),
    "signup":(<Signup data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>),
    "signup-done":(<SignUpDone data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp} />)
  }
  
  let comp = compObj[activeComp.name];
  
  return (
    <div className="App">

      {comp}

    </div>
  );
}

export default App;
