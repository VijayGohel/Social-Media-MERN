import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../../api/UserRequest';
import "./FollowersCard.css"
import User from '../user/User.jsx'
import { useSelector } from 'react-redux';

const FollowersCard = () => {
    const [users, setUsers] = useState([]);
    const {user} = useSelector(state=>state.authReducer.authData)

    const fetchAllUsers = async ()=>{
        const {data} = await getAllUsers();
        setUsers(data);
    }
    useEffect(() => {
      fetchAllUsers();
    }, [])
    
    return (
        <div className='followers-card'>
            <h3>People you may know</h3>
            {
                users.map((person) => {
                    if(person._id !== user._id)
                    {
                        return (<User person={person} key={person._id} />)
                    }
                })
            }
        </div>
    )
}

export default FollowersCard