import { Modal, Button, Group } from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/UploadAction';
import { updateUser } from '../../actions/UserAction';

function ProfileModal({opened , setOpened, data}) {

  const {password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [profilePicture, setProfilePicture] = useState(null);
  const [coverPicture, setCoverPicture] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleImageChange = (e)=>{
    if(e.target.files && e.target.files[0])
    {
      const img = e.target.files[0];
      e.target.name === "profilePicture" ? setProfilePicture(img) : setCoverPicture(img);
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const userData = formData;

    if(profilePicture)
    {
      const data = new FormData();
      const fileName = Date.now() + " " + profilePicture.name;
      data.append("name", fileName);
      data.append("image", profilePicture);

      userData.profilePicture = fileName;

      try {
          dispatch(uploadImage(data));
      } catch (error) {
          console.log(error);
      }      
    }

    if(coverPicture)
    {
      const data = new FormData();
      const fileName = Date.now() + " " + coverPicture.name;
      data.append("name", fileName);
      data.append("image", coverPicture);

      userData.coverPicture = fileName;

      try {
          dispatch(uploadImage(data));
      } catch (error) {
          console.log(error);
      }      
    }

    dispatch(updateUser(params.id, userData));
    setOpened(false);
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="55%"
      >

        <form className='signup-form'>

            <h3>Your Info</h3>

            <div className="name">
                <input type="text" placeholder='First Name' onChange={handleChange} value={formData.firstName} name="firstName" id="first-name" className='form-input'/>
                <input type="text" placeholder='Last Name' onChange={handleChange} value={formData.lastName} name="lastName" id="last-name" className='form-input'/>
            </div>

            <div className="works-at">
                <input type="text" placeholder='Works at' onChange={handleChange} value={formData.worksAt} name="worksAt" id="works-at" className='form-input'/>
            </div>
            
            <div className="address">
                <input type="text" placeholder='Lives in' onChange={handleChange} value={formData.livesIn} name="livesIn" id="lives-in" className='form-input'/>
                <input type="text" placeholder='Country' onChange={handleChange} value={formData.country} name="country" id="country" className='form-input'/>
            </div>

            <div className="relationship">
                <input type="text" placeholder='Relationship status' onChange={handleChange} value={formData.relationship} name="relationship" id="relationship" className='form-input'/>
            </div>

            <div className="photos-upload">
                <label style={{fontSize:'13px', width:'15%'}}>Profile Picture</label>
                <input type="file" onChange={handleImageChange} name="profilePicture" id="profile-picture" />
                <label style={{fontSize:'13px', width:'15%'}}>Cover Picture</label>
                <input type="file" onChange={handleImageChange} name="coverPicture" id="cover-picture" />
            </div>
            <button type="submit" onClick={handleSubmit} className='button signup-btn'>Save</button>
        </form>

      </Modal>

      
    </>
  );
}

export default ProfileModal;