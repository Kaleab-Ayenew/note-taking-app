
import './App.css';
import NoteList from "./components/NoteList"
import Editor from "./components/Editor"
import Login from "./components/Login"
import React from 'react'
import Signup from './components/SignUp';
import SignUpDone from './components/SignUpDone';
import Test from './components/test';

import { editorLoader, newEditLoader } from './components/Editor';

import { createBrowserRouter, createBro, Navigate, RouterProvider} from 'react-router-dom';//


//Redux Imports

import { useSelector, useDispatch } from 'react-redux';
import { getUserData, createUserData, deleteUserData } from "./app/userData"



function App() {
  let [activeComp, setActiveComp] = React.useState({"name":"login","props":{}}) //Possible values are editor, list, login, signup
  let [userInfo, setUserInfo] = React.useState({})
  let [url, setUrl] = React.useState("http://192.168.43.227:8000")

  const dispatch = useDispatch()

  const userData = useSelector(getUserData)

  React.useEffect(()=>{
    if (localStorage.getItem("user-data") !== null && userData === null){
      const parsedData = JSON.parse(localStorage.getItem("user-data"))
      dispatch(createUserData(parsedData))
      console.log("The userData was populated with data from the local Storage")
    }

    localStorage.setItem("main-url", url)
    console.log(localStorage.getItem("user-data"), "This was printed from the App page")
  },[])
  

  
  
  const router = createBrowserRouter([
      
        {
          path: "/",
          element: userData ? <NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/login"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/home",
          element: userData ? <NoteList data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/error-testing/Home"/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/login",
          element: userData ? <Navigate replace to={`/error-testing/${localStorage.getItem("user-data")}`} /> : <Login data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/sign-up",
          element:  userData ? <Navigate to="/home"/> : <Signup data={activeComp.props} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/>,
          loader: null,
          action: null,
          errorElement: null
        },
        {
          path: "/new-note",
          element: userData ? <Editor isNew={true} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/login"/>,
          loader: newEditLoader,
          action: null,
          errorElement: null
        },
        {
          path: "/editor/:noteId",
          element: userData ? <Editor isNew={false} url={url} setUrl={setUrl} userInfo={userInfo} setUserInfo={setUserInfo} activeComp={activeComp} setActiveComp={setActiveComp}/> : <Navigate to="/login"/>,
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
