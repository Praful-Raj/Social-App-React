import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'
import './App.css'
import CreatePost from './component/CreatePost'
import PostList from './component/PostList'


function App() {
  const [selectedTab,setSelectedTab]=useState("Home")
  return (
    <div className='app-container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
        <Header/>
        {selectedTab==="Home"?<PostList/>:<CreatePost/>}
        
        
        <Footer/>
      </div>
    </div>
  )
}

export default App
