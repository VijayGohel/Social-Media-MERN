import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userChats } from '../../api/ChatRequest';
import Conversation from '../../components/conversation/Conversation';
import LogoSearch from '../../components/logo-search/LogoSearch'
import { UilSetting, UilBell, UilCommentAltMessage } from "@iconscout/react-unicons";
import Home from "../../img/home.png";
import './Chat.css'
import ChatBox from '../../components/chatbox/ChatBox';
import { io } from 'socket.io-client';

const Chat = () => {

    const {user} = useSelector(state=>state.authReducer.authData);
    const [chats, setChats] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
    const socket = useRef();

    useEffect(() => {
        getChats();
        socket.current = io("http://localhost:8800");
        socket.current.emit("new-user-add", user._id);
        socket.current.on("get-users", (users)=>{
            setOnlineUsers(users);
        })
        socket.current.on("receive-message", (message)=>{
            setReceiveMessage(message);
        });
    }, [])

    useEffect(() => {
        if(sendMessage)
        {
            socket.current.emit("send-message", sendMessage);
        }
    }, [sendMessage])

    const getChats = async ()=>{
        try {
            const {data} = await userChats(user._id);
            setChats(data);
        } catch (error) {
            console.log(error);
        }
    }

    const checkOnlineStatus = (chat)=>{
        const member = chat.members.find(member=>member!=user._id);
        const online = onlineUsers.find(user=>user.userId==member);
        return online ? true : false;
    }

    return (
        <div className="Chat">
            <div className="Left-side-chat">
                <LogoSearch />
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat) =>
                            <div onClick={()=>setCurrentChat(chat)}  key={chat._id}>
                                <Conversation data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="Right-side-chat">
                <div style={{ width: '20rem', alignSelf: 'flex-end' }}>
                    <div className="nav-icons">
                        <Link to={"../home"}>
                            <img src={Home} alt="" />
                        </Link>
                        <UilSetting />
                        <UilBell />
                        <Link to={"../chat"}>
                            <UilCommentAltMessage />
                        </Link>
                    </div>
                </div>

                <ChatBox 
                    chat={currentChat} 
                    currentUser={user._id} 
                    setSendMessage={setSendMessage} 
                    receiveMessage={receiveMessage}
                />
            </div>
        </div>
    )
}

export default Chat