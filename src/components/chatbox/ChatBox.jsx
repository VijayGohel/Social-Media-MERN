import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { addMessage, getMessages } from '../../api/MessageRequest';
import { getUser } from '../../api/UserRequest';
import './ChatBox.css'
import { format } from 'timeago.js';
import InputEmojiWithRef from 'react-input-emoji';

const ChatBox = ({ chat, currentUser, setSendMessage, receiveMessage }) => {

    const userId = chat?.members.find((user) => user != currentUser);
    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (chat) {
            getUserData();
            fetchMessages();
        }
    }, [chat])

    useEffect(() => {
        if(receiveMessage && chat && receiveMessage.chatId == chat._id) {
            // setMessages([...messages, receiveMessage]); key error as received message won't have _id 
            fetchMessages();
        }
    }, [receiveMessage])

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

    const sendMessage = async (e)=>{
        e.preventDefault();

        const message = {
            text: newMessage,
            chatId: chat._id,
            senderId: currentUser 
        }

        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage("");
        } catch (error) {
            console.log(error);
        }

        //send message on socket server
        const receiverId = chat.members.find((user)=>user!=currentUser);
        setSendMessage({message, receiverId});
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
                                (
                                    <div key={message._id} className={`message ${message.senderId==currentUser ? 'own' : null}`}>
                                        <span>{message.text}</span>
                                        <span>{format(message.createdAt)}</span>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="chat-sender">
                            <div>+</div>
                            <InputEmojiWithRef 
                                value={newMessage}
                                onChange={(value)=>setNewMessage(value)}
                            />
                            <button className="follow-button button" onClick={sendMessage}>Send</button>
                        </div>
                    </>
                ) :
                    <span className="chatbox-empty-message">Tap on chat to start conversation.</span>}
            </div>
        </>
    )
}

export default ChatBox