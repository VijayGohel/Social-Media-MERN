import { Modal, Button, Group } from '@mantine/core';

function ProfileModal({opened , setOpened}) {
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
                <input type="text" placeholder='First Name' name="firstName" id="first-name" className='form-input'/>
                <input type="text" placeholder='Last Name' name="lastName" id="last-name" className='form-input'/>
            </div>

            <div className="works-at">
                <input type="text" placeholder='Works at' name="worksat" id="works-at" className='form-input'/>
            </div>
            
            <div className="address">
                <input type="text" placeholder='Lives in' name="livesin" id="lives-in" className='form-input'/>
                <input type="text" placeholder='Country' name="country" id="country" className='form-input'/>
            </div>

            <div className="relationship">
                <input type="text" placeholder='Relationship status' name="relationship" id="relationship" className='form-input'/>
            </div>

            <div className="photos-upload">
                <label style={{fontSize:'13px', width:'15%'}}>Profile Image</label>
                <input type="file" name="profileImage" id="profile-image" />
                <label style={{fontSize:'13px', width:'15%'}}>Cover Image</label>
                <input type="file" name="coverImage" id="cover-image" />
            </div>
            <button type="submit" className='button signup-btn'>Save</button>
        </form>

      </Modal>

      
    </>
  );
}

export default ProfileModal;