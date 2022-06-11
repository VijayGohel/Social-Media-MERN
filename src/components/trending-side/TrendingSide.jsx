import React, {useState} from 'react'
import "./TrendingSide.css"
import Home from "../../img/home.png";
// import Noti from "../../img/noti.png";
// import Comment from "../../img/comment.png";
import { UilSetting, UilBell, UilCommentAltMessage } from "@iconscout/react-unicons";
import TrendCard from "../trend-card/TrendCard"
import ShareModal from "../share-modal/ShareModal"

const TrendingSide = () => {

  const [shareModalOpened,setShareModalOpened] = useState(false);

  return (
    <div className="trending-side">
        <div className="nav-icons">
            <img src={Home} alt="" />
            <UilSetting />
            {/* <img src={Noti} alt="" /> */}
            <UilBell />
            <UilCommentAltMessage />
            {/* <img src={Comment} alt="" /> */}
        </div>

        <TrendCard />

        <button className='button trend-share' onClick={()=>setShareModalOpened(true)}>Share</button>
        <ShareModal opened={shareModalOpened} setOpened={setShareModalOpened}/>
    </div>
  )
}

export default TrendingSide