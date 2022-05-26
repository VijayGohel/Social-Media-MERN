import React from 'react'
import "./Home.css"
import ProfileSide from "../../components/profile-side/ProfileSide"

const Home = () => {
  return (
      <div className="home">
        <ProfileSide></ProfileSide>
        <div className="post-side">Posts</div>
        <div className="right-side">Right side</div>
      </div>
  )
}

export default Home