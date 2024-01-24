import React from 'react'
import Card from "../Components/Card/Card"
import Navbar from '../Components/Navbar/Navbar'
import Posts from '../Components/Posts'
import Post from '../Components/Post'
import {useSelector} from 'react-redux'


const HomePage = () => {
  // const user = useSelector(state => state.auth.user)
 
  return (
    <div>
      <Navbar 
    />
      <Posts />
    </div>
    
  )
}

export default HomePage