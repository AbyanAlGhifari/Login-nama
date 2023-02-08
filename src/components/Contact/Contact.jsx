import './Contact.css'
const gmail = window.top.location.href='mailto:abyanstudent@gmail.com'

function Contact() {
    
    return (
        <div className='kon'>
            <div className='klef'>
                <div>
                    Gmail
                </div>
                <div>
                    Facebook
                </div>
            </div>
            <div className='kdot'>
                <div>
                    :  <a href={gmail}>abyanstudent@gmail.com</a>
                </div>
                <div>
                    :  <a href='https://www.facebook.com/abyan.yanba'>abyan.yanba</a>
                </div>
            </div>
            <div className='kret'>
                <div>
                    <a href=''>Linkedin</a>
                </div>
                <div>
                    <a href=''>Github</a>
                </div>
            </div>
            <div className='kdot'>
                <div>
                    :  <a href={gmail}>abyanstudent@gmail.com</a>
                </div>
                <div>
                    :  <a href='https://www.facebook.com/abyan.yanba'>abyan.yanba</a>
                </div>
            </div>
        </div>
    )
}

export default Contact