import React, {useState , useRef } from 'react'
import "./PostShare.css"
import ProfileImg from "../../img/profileImg.jpg"
import {UilScenery, UilPlayCircle, UilLocationPoint,UilSchedule, UilTimes} from "@iconscout/react-unicons";

const PostShare = () => {

    const [image,setImage] = useState(null);
    const imageRef = useRef();

    const onPhotoUpload = (e)=>{
          if(e.target.files && e.target.files[0])
          {
              setImage({
                  imagePath: URL.createObjectURL(e.target.files[0])
              })
          }
    }

    const textAreaAutoHeight= (e)=>{
        let textarea = document.getElementById('post-text');    
        textarea.style.height='auto';
        textarea.style.height = (textarea.scrollHeight)-20 + 'px';
    }

  return (
    <div className='post-share'>
        <img src={ProfileImg} alt="" />

        <div>
            <textarea id='post-text' rows='1' onChange={textAreaAutoHeight} placeholder="What's happening"/>

                <div className="post-options">
                    <div onClick={()=>imageRef.current.click()} className="option" style={{color: "var(--photo)"}}>
                        <UilScenery />
                        <span>Photo</span> 
                    </div>
                    <div className="option" style={{color: "var(--video)"}}>
                        <UilPlayCircle />
                        <span>Video</span> 
                    </div>
                    <div className="option" style={{color: "var(--location)"}}>
                        <UilLocationPoint />
                        <span>Location</span> 
                    </div>
                    <div className="option" style={{color: "var(--shedule)"}}>
                        <UilSchedule />
                        <span>Schedule</span> 
                    </div>
                    
                    <button className='button postshare-btn'>Share</button>

                    <div style={{display:"none"}}>    
                        <input type="file" id="image_uploads" name="image_uploads" 
                        accept=".jpg, .jpeg, .png" ref={imageRef} onChange={onPhotoUpload}></input>
                    </div>
                </div>

                { image &&
                    <div className="previewImage">
                        <UilTimes className="cross-icon" onClick={()=>setImage(null)}/>
                        <img src={image.imagePath} alt="preview" />
                    </div>
                }
        </div>
    </div>
  )
}

export default PostShare