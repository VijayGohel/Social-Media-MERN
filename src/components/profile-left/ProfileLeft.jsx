import React from 'react'
import FollowersCard from '../followers-card/FollowersCard'
import LogoSearch from '../logo-search/LogoSearch'
import ProfileInfoCard from '../profile-info-card/ProfileInfoCard'

const ProfileLeft = () => {
  return (
    <div className='profile-side'>
        <LogoSearch />
        <ProfileInfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft