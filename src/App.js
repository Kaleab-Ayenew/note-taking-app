
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import Login from "./components/Login"
import React from 'react'
import Signup from './components/SignUp';
import SignUpDone from './components/SignUpDone';
import Test from './components/test';

import { editorLoader } from './components/Editor';

import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';//


//Redux Imports

import { useSelector, useDispatch } from 'react-redux';
import { getUserData, createUserData } from "./app/userData"



function App() {
  let [userInfo, setUserInfo] = React.useState({})
  let [url, setUrl] = React.useState("http://192.168.43.227:8000")

  const dispatch = useDispatch()

  const userData = useSelector(getUserData)

  const checkUser = ()=>{
    if (localStorage.getItem("user-data") !== null && userData === null){
      const parsedData = JSON.parse(localStorage.getItem("user-data"))
      dispatch(createUserData(parsedData))
      console.log("The userData was populated with data from the local Storage")
    }

    localStorage.setItem("main-url", url)
    console.log(localStorage.getItem("user-data"), "This was printed from the App page")
  }
  
  checkUser()
  
  const loggedIn = userData !== null
  
  
  const router = createBrowserRouter([
      
        {
          path: "/",
          element: loggedIn ? <NoteList url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} /> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/home",
          element: loggedIn ? <NoteList url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} /> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/login",
          element: loggedIn ? <Navigate replace to="/home" /> : <Login  url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/sign-up",
          element:  loggedIn ? <Navigate to="/home"/> : <Signup url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/new-note",
          element: loggedIn ? <Editor isNew={true} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} /> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/editor/:noteId",
          element: loggedIn ? <Editor isNew={false} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} /> : <Navigate to="/login"/>,
          loader: editorLoader,
          action: null,
          errorElement: null
        },
        {
          path: "/sign-up-success",
          element: <SignUpDone url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo}  />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/test",
          element: <Test />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/error-testing/:source",
          element: <>This is the Testing of the Error Element</>,
          loader: ({params})=>{
            const getData = params['source']
            console.log("This error was generated from ", getData)
            return null
          }
        }
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
