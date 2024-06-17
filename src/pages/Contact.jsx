import arrow from '../assets/arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact__container'>
        <div className='contact__title'>
          <h1>CONTACT ME</h1>
          <p>(choose one way to connect)</p>
        </div>
        <div className='contact__links'>
          <a href='/'>EMAIL<img src={arrow} /></a>
          <a href='/' >LINKEDIN<img src={arrow} /></a>
          <a href='/' >GITHUB<img src={arrow} /></a>
          <a href='/' >WHATSAPP<img src={arrow} /></a>
        </div>
      </div>
    </div>
  )
} 

export default Contact
