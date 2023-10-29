import '../assets/stylesheets/Content.css'
import IconButton from './IconButton'
import linkedInIcon from '../assets/icons/linkedin.png'
import mailIcon from '../assets/icons/Mail.png'

let profileFullName = 'Laura Smith'
let profileDesignation = 'Frontend Developer'
let profileEmail = 'laurasmith@xyz.com'
let aboutText = 'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'
let interestText = 'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'

function Content() {
    return (
        <div className='content-div'>
            <h1 className='white-font' id='prof-name-text'>{profileFullName}</h1>
            <h3 className='white-font' id='prof-designation-text'>{profileDesignation}</h3>
            <h5 className='white-font' id='prof-email-text'>{profileEmail}</h5>

            <div className='connectivity-div'>
                <IconButton icon={mailIcon} buttonText='Email' buttonTextColor='#374151' backgroundColor='#ffffff'></IconButton>
                <IconButton icon={linkedInIcon} buttonText='LinkedIn' buttonTextColor='#ffffff' backgroundColor='#5093E2'></IconButton>
                {/* <button>Email</button>
                <button>Linkedin</button> */}
            </div>

            <h2 className='white-font section-heading'>About</h2>
            <p className='white-font profile-detail-text'>{aboutText}</p>
            <h2 className='white-font section-heading'>Interests</h2>
            <p className='white-font profile-detail-text'>{interestText}</p>
        </div>
    )
}

export default Content;