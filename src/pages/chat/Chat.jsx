import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userChats } from '../../api/ChatRequest';
import Conversation from '../../components/conversation/Conversation';
import LogoSearch from '../../components/logo-search/LogoSearch'
import './Chat.css'

const Chat = () => {

    const {user} = useSelector(state=>state.authReducer.authData);
    const [chats, setChats] = useState([]);
    
    useEffect(() => {
        getChats();
    }, [])

    const getChats = async ()=>{
        try {
            const {data} = await userChats(user._id);
            setChats(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="Chat">
            <div className="Left-side-chat">
                <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) =>
                            <Conversation data={chat} currentUserId={user._id} />
                        )}
                    </div>
                </div>
            </div>
            <div className="Right-side-chat">right side</div>
        </div>
    )
}

export default Chat