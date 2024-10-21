import profilePic from './assets/edit.jpg'

function Card() {

    return(
        <div className="card">
            {/* alternate text, source */}
            {/* src = "https://via.placeholder.com/150" */}
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>mehmet code</h2>
            <p className='card-text'>I learn the react and ı will cerate a website.</p>
        </div>
    );
}

export default Card