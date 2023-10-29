import '../assets/stylesheets/Footer.css'
import twitterIcon from '../assets/icons/Twitter Icon.png';
import facebookIcon from '../assets/icons/Facebook Icon.png';
import instagramIcon from '../assets/icons/Instagram Icon.png';
import githubIcon from '../assets/icons/GitHub Icon.png';

function Footer() {
    return (
        <div>
            <div className='social-icon-container-div'>
                <img className='footer-social-icon' src={twitterIcon} alt="twitter-logo"/>
                <img className='footer-social-icon' src={facebookIcon} alt="facebook-logo"/>
                <img className='footer-social-icon' src={instagramIcon} alt="instagram-logo"/>
                <img className='footer-social-icon' src={githubIcon} alt="github-logo"/>
            </div>
        </div>
    )
}

export default Footer;