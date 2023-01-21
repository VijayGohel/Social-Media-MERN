import React from 'react'
import './ProfileInfoCard.css'
import {UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../profile-modal/ProfileModal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { logout } from '../../actions/AuthAction'
import { useEffect } from 'react'
import * as UserApi from '../../api/UserRequest'

const ProfileInfoCard = () => {

    const [profileModalOpened,setProfileModalOpened] = useState(false);

    let {user} = useSelector(state=>state.authReducer.authData);
    const params = useParams();
    const profileId = params.id;
    const dispatch = useDispatch();
    let [profileUser, setProfileUser] = useState({});

    const handleLogout = ()=>{
        dispatch(logout());
    }

    const fetchProfileUser = async ()=>{
        if(profileId === user._id){
            setProfileUser(user);
            }
        else{
            profileUser = await UserApi.getUser(profileId);
            setProfileUser(profileUser.data);
        }
    }
    useEffect(()=>{
        fetchProfileUser();
        
    },[user]);

  return (
    <div className='profile-info-card'>
        <div className="info-head">
            <h4>Profile info</h4>
           { profileId === user._id && 
                <>
                    <UilPen width="2rem" height="1.2rem" className="edit-info" onClick={()=>setProfileModalOpened(true)}/>
                    <ProfileModal opened={profileModalOpened} setOpened={setProfileModalOpened} data={user}/>
                </>
           }
        </div>

        <div className="info">
            <span>Status</span>
            <span>{user.relationship}</span>
        </div>

        <div className="info">
            <span>Lives in</span>
            <span>{user.livesIn}</span>
        </div>

        <div className="info">
            <span>Works at</span>
            <span>{user.worksAt}</span>
        </div>

        <button className='button logout' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default ProfileInfoCard
