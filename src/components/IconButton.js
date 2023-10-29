import '../assets/stylesheets/IconButton.css'

function IconButton({icon, buttonText, buttonTextColor, backgroundColor}) {
    return (
        <div className='button button-container' style={{backgroundColor:backgroundColor}}>
            <img className='button-img' src={icon} alt='icon-here' />
            <p className='button-text' style={{color:buttonTextColor}}>{buttonText}</p>
        </div>
    )
}

export default IconButton;