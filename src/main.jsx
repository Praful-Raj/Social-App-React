import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './component/CreatePost.jsx'
import PostList, { postLoader } from './component/PostList.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:"/", element:<PostList/>, loader:postLoader},
      {path:"/create-post", element:<CreatePost/>}
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
