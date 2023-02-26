import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getMessages } from '../../api/MessageRequest';
import { getUser } from '../../api/UserRequest';
import './ChatBox.css'

const ChatBox = ({ chat, currentUser }) => {

    const userId = chat?.members.find((user) => user != currentUser);
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        if (chat) {
            getUserData();
            fetchMessages();
        }
    }, [chat])

    const getUserData = async () => {
        try {
            const { data } = await getUser(userId);
            setUserData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchMessages = async () => {
        try {
            const { data } = await getMessages(chat._id);
            setMessages(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="ChatBox-container">
                {chat ? (
                    <>
                        <div className="chat-header">
                            <div className="follower">
                                <div>
                                    <img
                                        src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + 'defaultProfile.png'}
                                        alt="Profile Picture"
                                        className="follower-img"
                                        style={{ width: '50px', height: '50px' }}
                                    />
                                    <div className="follower-text" style={{ fontSize: '0.9rem' }}>
                                        <span>{userData?.firstName} {userData?.lastName}</span>
                                    </div>
                                </div>
                            </div>

                            <hr style={{ width: '85%', border: '0.1px solid #ececec' }} />
                        </div>
                        <div className="chat-body">
                            {messages?.map((message) =>
                                (<div key={message._id}>{message.text}</div>)
                            )}
                        </div>
                    </>
                ) :
                    <span className="chatbox-empty-message">Tap on chat to start conversation.</span>}
            </div>
        </>
    )
}

export default ChatBox