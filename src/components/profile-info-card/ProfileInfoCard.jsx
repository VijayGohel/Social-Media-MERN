import React from 'react'
import './ProfileInfoCard.css'
import {UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../profile-modal/ProfileModal'
import { useState } from 'react'

const ProfileInfoCard = () => {

    const [profileModalOpened,setProfileModalOpened] = useState(false);

  return (
    <div className='profile-info-card'>
        <div className="info-head">
            <h4>Your info</h4>
            <UilPen width="2rem" height="1.2rem" className="edit-info" onClick={()=>setProfileModalOpened(true)}/>
            <ProfileModal opened={profileModalOpened} setOpened={setProfileModalOpened}/>
        </div>

        <div className="info">
            <span>Status</span>
            <span>In relationship</span>
        </div>

        <div className="info">
            <span>Lives in</span>
            <span>Ahmedabad</span>
        </div>

        <div className="info">
            <span>Works at</span>
            <span>Microsoft Inc.</span>
        </div>

        <button className='button logout'>Logout</button>
    </div>
  )
}

export default ProfileInfoCard
