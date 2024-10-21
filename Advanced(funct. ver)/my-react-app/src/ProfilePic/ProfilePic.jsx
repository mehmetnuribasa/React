import './ProfilePic.css'

function ProfilePic() {

    const imageURL = './src/assets/edit.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imageURL} className='profile-pic'></img>
    );

}

export default ProfilePic