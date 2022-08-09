import React from 'react'
import Cover from '../../img/coverpic2.jpg'
import ProfileImg from '../../img/profileImg.jpg'
import "./ProfileCard.css"
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({location}) => {

  const user = useSelector(state=>state.authReducer.authData.user);
  const posts = useSelector(state=>state.postReducer.posts);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='profile-card'>
        <div className="profile-images">
            <img src={user.coverPicture ? publicFolder + user.coverPicture : publicFolder+"defaultCover.jpg"} alt="" />
            <img src={user.profilePicture ? publicFolder + user.profilePicture : publicFolder+"defaultProfile.png"} alt="" />
        </div>

        <div className="profile-name">
          <span>{user.firstName} {user.lastName}</span>
          <span>{user.worksAt ?? "Write about yourself"}</span>
        </div>

        <div className="follow-status">
          <hr />
          <div>
            <div className="follow">
              <span>{user.following.length}</span>
              <span>followers</span>
            </div>

            <div className="vl"></div>

            <div className="follow">
              <span>{user.followers.length}</span>
              <span>following</span>
            </div>

            {
              location === "profilePage" &&
              <>
              <div className="vl"></div>

              <div className="follow">
                <span>{posts.filter((post)=>post.userId===user._id).length}</span>
                <span>posts</span>
              </div>
              </>
            }
          </div>
          <hr />
        </div>
          
        { 
          location !== "profilePage" &&  
          <div className="profile-link">
            <Link to={`/profile/${user._id}`} style={{color:"inherit", textDecoration:"none"}}>
              <span>My Profile</span>
            </Link>
          </div>
        }
    </div>
  )
}

export default ProfileCard