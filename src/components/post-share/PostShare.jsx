import React, {useState , useRef } from 'react'
import "./PostShare.css"
import {UilScenery, UilPlayCircle, UilLocationPoint,UilSchedule, UilTimes} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';

const PostShare = () => {

    const dispatch = useDispatch();
    const [image,setImage] = useState(null);
    const imageRef = useRef();
    const desc = useRef();
    const user = useSelector(state=>state.authReducer.authData.user);
    const uploading  = useSelector(state=>state.postReducer.uploading);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    
    const onPhotoUpload = (e)=>{
          if(e.target.files && e.target.files[0])
          {
              setImage(e.target.files[0]);
          }
    }

    const textAreaAutoHeight= (e)=>{
        let textarea = document.getElementById('post-text');    
        textarea.style.height='auto';
        textarea.style.height = (textarea.scrollHeight)-20 + 'px';
    }

    const handleUpload = (e)=>{
        const postData = {
            userId: user._id,
            desc: desc.current.value,
        }

        if(image)
        {
            const data = new FormData();
            const fileName = Date.now() + " " + image.name;
            data.append("name", fileName);
            data.append("image", image);

            postData.image = fileName;

            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.log(error);
            }
        }

        dispatch(uploadPost(postData));
        setImage(null);
        desc.current.value="";
    }

  return (
    <div className='post-share'>
        <img src={user.profilePicture ? publicFolder + user.profilePicture : publicFolder+"defaultProfile.png"} alt="" />

        <div>
            <textarea ref={desc} id='post-text' rows='1' onChange={textAreaAutoHeight} placeholder="What's happening"/>

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
                    
                    <button onClick={handleUpload} className='button postshare-btn' disabled={uploading}>
                        {uploading ? "Uploading..." : "Share"}
                    </button>

                    <div style={{display:"none"}}>    
                        <input type="file" id="image_uploads" name="image_uploads" 
                        accept=".jpg, .jpeg, .png" ref={imageRef} onChange={onPhotoUpload}></input>
                    </div>
                </div>

                { image &&
                    <div className="previewImage">
                        <UilTimes className="cross-icon" onClick={()=>setImage(null)}/>
                        <img src={URL.createObjectURL(image)} alt="preview" />
                    </div>
                }
        </div>
    </div>
  )
}

export default PostShare