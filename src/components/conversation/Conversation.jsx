import React from 'react'
import { useState, useEffect } from 'react';
import { getUser } from '../../api/UserRequest';

const Conversation = ({ data, currentUserId, online }) => {
  const userId = data.members.find((user) => user != currentUserId);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, [])

  const getUserData = async () => {
    try {
      const { data } = await getUser(userId);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="follower conversation">
        <div>
          {online && <div className="online-dot"></div>}
          <img
            src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + 'defaultProfile.png'}
            alt="Profile Picture"
            className="follower-img"
            style={{ width: '50px', height: '50px' }}
          />
          <div className="follower-text" style={{ fontSize: '0.8rem' }}>
            <span>{userData?.firstName} {userData?.lastName}</span>
            <span>{online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>

      <hr style={{ width: '85%', border: '0.1px solid #ececec' }} />
    </>
  )
}

export default Conversation