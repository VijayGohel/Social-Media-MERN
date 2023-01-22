import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/UserAction';

const User = ({person}) => {

    const dispatch =  useDispatch();
    const publicFolder =  process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useSelector(state=>state.authReducer.authData);
    const [following, setFollowing] = useState(user.following.includes(person._id));

    const handleFollow = ()=>{
        following ? 
        dispatch(unfollowUser(person._id, user)) :
        dispatch(followUser(person._id, user));

        setFollowing(prev=>!prev);
    }

    return (
        <div className="follower">
            <div>
                <img src={person.profilePicture ? publicFolder + person.profilePicture : publicFolder + "defaultProfile.png"} alt="" className='follower-img' />
                <div className="follower-text">
                    <span>{person.firstName} {person.lastName}</span>
                    <span>@{person.userName}</span>
                </div>
            </div>
            <button className={`button follow-button ${following ? "unfollow-button" : null}`} onClick={handleFollow}>{following ? "Unfollow" : "Follow"}</button>
        </div>
    )
}

export default User