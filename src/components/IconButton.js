import '../assets/stylesheets/IconButton.css'

function IconButton({icon, buttonText, buttonTextColor, backgroundColor}) {
    return (
        <div className='button button-container' style={{backgroundColor:{backgroundColor}}}>
            <img src={icon} alt='icon-here' />
            <p style={{color:{buttonTextColor}}}>{buttonText}</p>
        </div>
    )
}

export default IconButton;