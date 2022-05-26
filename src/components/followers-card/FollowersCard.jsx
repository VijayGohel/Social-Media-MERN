import React from 'react'
import "./FollowersCard.css"
import {Followers} from "../../data/FollowersData"

const FollowersCard = () => {
  return (
    <div className='followers-card'>
        <h3>Who is following you</h3>

        {
            Followers.map((follower)=>{
                return(
                    <div className="follower">
                        <div>
                            <img src={follower.img} alt="" className='follower-img'/>
                            <div className="follower-text">
                                <span>{follower.name}</span>
                                <span>@{follower.username}</span>
                            </div>
                        </div>
                        <button className='button follow-button'>Follow</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default FollowersCard