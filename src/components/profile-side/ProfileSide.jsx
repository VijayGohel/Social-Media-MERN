import React from 'react'
import LogoSearch from '../logo-search/LogoSearch'
import ProfileCard from '../profile-card/ProfileCard'
import "./ProfileSide.css"

const ProfileSide = () => {
  return (
    <div className='profile-side'>
        <LogoSearch />
        <ProfileCard />
    </div>
  )
}

export default ProfileSide