import React from 'react'
import "./Home.css"
import ProfileSide from "../../components/profile-side/ProfileSide"
import PostSide from '../../components/post-side/PostSide'
import { TrendingSide } from '../../components/trending-side/TrendingSide'

const Home = () => {
  return (
      <div className="home">
        <ProfileSide></ProfileSide>
        <PostSide />
        <TrendingSide />
      </div>
  )
}

export default Home