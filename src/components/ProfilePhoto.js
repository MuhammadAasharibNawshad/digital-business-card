import '../assets/stylesheets/ProfilePhoto.css';
import ProfilePhotoImage from '../assets/images/profile_photo.png';

function ProfilePhoto() {
    return (
        <div className='profile-photo-div'>
            <img className='profile-photo-image' src={ProfilePhotoImage} alt='profile-photo'/>
        </div>
    )
}

export default ProfilePhoto;

