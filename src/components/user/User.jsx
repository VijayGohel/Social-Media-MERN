import React from 'react'

const User = ({person}) => {

    const publicFolder =  process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="follower">
            <div>
                <img src={person.profilePicture ? publicFolder + person.profilePicture : publicFolder + "defaultProfile.png"} alt="" className='follower-img' />
                <div className="follower-text">
                    <span>{person.firstName} {person.lastName}</span>
                    <span>@{person.userName}</span>
                </div>
            </div>
            <button className='button follow-button'>Follow</button>
        </div>
    )
}

export default User