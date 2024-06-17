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
          <a href='/' target='_blank'>EMAIL<img src={arrow} /></a>
          <a href='https://www.linkedin.com/in/alysson-tomizawa-672a586/' target='_blank'>LINKEDIN<img src={arrow} /></a>
          <a href='https://github.com/altomizawa' target='_blank'>GITHUB<img src={arrow} /></a>
          <a href='https://wa.me/5561998133337' target='_blank'>WHATSAPP<img src={arrow} /></a>
        </div>
      </div>
    </div>
  )
} 

export default Contact
