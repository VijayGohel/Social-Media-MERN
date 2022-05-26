import React from 'react'
import LogoSearch from '../logo-search/LogoSearch'
import ProfileCard from '../profile-card/ProfileCard'
import FollowersCard from '../followers-card/FollowersCard'
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className='profile-side'>
        <LogoSearch />
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileSide