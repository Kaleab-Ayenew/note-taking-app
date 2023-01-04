import React from 'react'
import './App.css';

//Component Imports
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import Login from "./components/Login"
import Signup from './components/SignUp';
import SignUpDone from './components/SignUpDone';
import Test from './components/test';
import ErrorPage from './components/ErrorPage';

import { createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';//


//Redux Imports
import { useSelector, useDispatch } from 'react-redux';
import { getUserData, createUserData } from "./app/userData"



function App() {
  let [url] = React.useState("http://192.168.43.227:8000")

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
          element: loggedIn ? <NoteList /> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/home",
          element: loggedIn ? <NoteList /> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/login",
          element: loggedIn ? <Navigate replace to="/home" /> : <Login />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/sign-up",
          element:  loggedIn ? <Navigate to="/home"/> : <Signup />,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/new-note",
          element: loggedIn ? <Editor isNew={true} /> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/editor/:noteId",
          element: loggedIn ? <Editor isNew={false} /> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: <ErrorPage />
        },
        {
          path: "/sign-up-success",
          element: <SignUpDone />,
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
        }
  ])
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
