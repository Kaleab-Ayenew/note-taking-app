
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import Login from "./components/Login"
import React from 'react'
import Signup from './components/SignUp';
import SignUpDone from './components/SignUpDone';
import Main from './Main';

import {action as noteListAction} from "./components/NoteList"
import {loader as noteListLoader} from "./components/NoteList"

import {action as loginAction} from "./components/Login"
import {loader as loginLoader} from "./components/Login"

import { indexLoader } from './components/NoteList';

import { editorLoader } from './components/Editor';

import { Outlet, Route, Routes } from 'react-router';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';




function App() {
  let [activeComp, setActiveComp] = React.useState({"name":"login","props":{}}) //Possible values are editor, list, login, signup
  let [userInfo, setUserInfo] = React.useState({})
  let [url, setUrl] = React.useState("http://192.168.43.227:8000")

  localStorage.setItem("main-url", url)
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
          loader: indexLoader,
          action: null,
          errorElement: null
        },
        {
          path: "home",
          element: <NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: noteListLoader,
          action: noteListAction,
          errorElement: null
        },
        ,
        {
          path: "login",
          element: <Login data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: loginLoader,
          action: loginAction,
          errorElement: null
        },
        {
          path: "sign-up",
          element: <Signup data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "new-note",
          element: <Editor isNew={true} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "editor/:noteId",
          element: <Editor isNew={false} data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: editorLoader,
          action: null,
          errorElement: null
        },
        {
          path: "sign-up-success",
          element: <SignUpDone data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp} />,
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
