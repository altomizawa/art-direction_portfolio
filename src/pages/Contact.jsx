import arrow from '../assets/arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import './Contact.css'
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  function copyToClipboard () {
    navigator.clipboard.writeText('alyssontomizawa@hotmail.com');
    toast('e-mail address copied to clipboard');
  } 

  return (
    <div className='contact'>
      <div className='contact__container'>
        <div className='contact__title'>
          <h1>CONTACT ME</h1>
          <p>(choose one way to connect)</p>
        </div>
        <div className='contact__links'>
          <button onClick={copyToClipboard}>EMAIL<img src={arrow} /></button>
          <a href='https://www.linkedin.com/in/alysson-tomizawa-672a586/' target='_blank'>LINKEDIN<img src={arrow} /></a>
          <a href='https://github.com/altomizawa' target='_blank'>GITHUB<img src={arrow} /></a>
          <a href='https://wa.me/5561998133337' target='_blank'>WHATSAPP<img src={arrow} /></a>
        </div>
        <Toaster />
      </div>
    </div>
  )
} 

export default Contact
