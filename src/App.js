
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import Login from "./components/Login"
import React from 'react'
import Signup from './components/SignUp';
import SignUpDone from './components/SignUpDone';

import {loader as noteListLoader} from "./components/NoteList"

import { editorLoader, newEditLoader } from './components/Editor';

import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';




function App() {
  let [activeComp, setActiveComp] = React.useState({"name":"login","props":{}}) //Possible values are editor, list, login, signup
  let [userInfo, setUserInfo] = React.useState({})
  let [url, setUrl] = React.useState("http://192.168.43.227:8000")

  localStorage.setItem("main-url", url)
  const router = createBrowserRouter([
      
        {
          path: "/",
          element: localStorage.getItem("user-data") ? <NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/login"/>,
          loader: noteListLoader,
          action: null,
          errorElement: null
        },
        {
          path: "/home",
          element: localStorage.getItem("user-data") ? <NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/login"/>,
          loader: noteListLoader,
          action: null,
          errorElement: null
        },
        {
          path: "/login",
          element: localStorage.getItem("user-data") ? <Navigate to="/home"/> : <Login data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/sign-up",
          element:  localStorage.getItem("user-data") ? <Navigate to="/home"/> : <Signup data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/new-note",
          element: localStorage.getItem("user-data") ? <Editor isNew={true} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/login"/>,
          loader: newEditLoader,
          action: null,
          errorElement: null
        },
        {
          path: "/editor/:noteId",
          element: localStorage.getItem("user-data") ? <Editor isNew={false} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/login"/>,
          loader: editorLoader,
          action: null,
          errorElement: null
        },
        {
          path: "/sign-up-success",
          element: <SignUpDone data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp} />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/test",
          element: localStorage.getItem("user-data") ? <SignUpDone/> : <Navigate to="/login" replace={true}/>,
          loader: null,
          action: null,
          errorElement: null
        }
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
