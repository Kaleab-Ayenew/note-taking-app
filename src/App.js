
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import Login from "./components/Login"
import React from 'react'
import Signup from './components/SignUp';
import SignUpDone from './components/SignUpDone';
import Main from './Main';

import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';




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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: null,
      action: null,
      errorElement: null,
      children: [
        {
          index: true,
          element: <NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "home",
          element: <NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        ,
        {
          path: "login",
          element: <Login />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "sign-up",
          element: <Signup />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "editor",
          element: <Editor />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "sign-up-success",
          element: <SignUpDone />,
          loader: null,
          action: null,
          errorElement: null
        },
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
