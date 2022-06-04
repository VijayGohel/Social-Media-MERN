import React from 'react'
import Cover from '../../img/coverpic2.jpg'
import ProfileImg from '../../img/profileImg.jpg'
import "./ProfileCard.css"

const ProfileCard = ({isProfilePage}) => {
  return (
    <div className='profile-card'>
        <div className="profile-images">
            <img src={Cover} alt="" />
            <img src={ProfileImg} alt="" />
        </div>

        <div className="profile-name">
          <span>Rose Mary</span>
          <span>Senior Software Engineer</span>
        </div>

        <div className="follow-status">
          <hr />
          <div>
            <div className="follow">
              <span>7005</span>
              <span>followers</span>
            </div>

            <div className="vl"></div>

            <div className="follow">
              <span>5</span>
              <span>following</span>
            </div>

            {
              isProfilePage &&
              <>
              <div className="vl"></div>

              <div className="follow">
                <span>3</span>
                <span>posts</span>
              </div>
              </>
            }
          </div>
          <hr />
        </div>
          
        { 
          !isProfilePage &&  
          <div className="profile-link">
            <span>My Profile</span>
          </div>
        }
    </div>
  )
}

export default ProfileCard