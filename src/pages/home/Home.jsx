import React from 'react'
import "./Home.css"
import ProfileSide from "../../components/profile-side/ProfileSide"
import PostSide from '../../components/post-side/PostSide'

const Home = () => {
  return (
      <div className="home">
        <ProfileSide></ProfileSide>
        <PostSide />
        <div className="trending-side">trending side</div>
      </div>
  )
}

export default Home