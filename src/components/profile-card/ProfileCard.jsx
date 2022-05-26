import React from 'react'
import Cover from '../../img/coverpic2.jpg'
import ProfileImg from '../../img/profileImg.jpg'
import "./ProfileCard.css"

const ProfileCard = () => {
  return (
    <div className='profile-card'>
        <div className="profile-images">
            <img src={Cover} alt="" />
            <img src={ProfileImg} alt="" />
        </div>
    </div>
  )
}

export default ProfileCard