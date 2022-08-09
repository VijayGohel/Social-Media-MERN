import React from 'react'
import './Profile.css'
import PostSide from '../../components/post-side/PostSide'
import ProfileCard from '../../components/profile-card/ProfileCard'
import ProfileLeft from '../../components/profile-left/ProfileLeft'
import TrendingSide from '../../components/trending-side/TrendingSide' 

const Profile = () => {
  return (
    <div className='home'>
      <ProfileLeft /> 

      <div className='profile-center'>
        <ProfileCard location={"profilePage"}/>
        <PostSide />
      </div>

      <TrendingSide />
    </div>
  )
}

export default Profile