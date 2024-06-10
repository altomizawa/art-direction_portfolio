import './Work.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Work() {
  useGSAP(() => {
    gsap.from('.work__client-wrapper', {
      y: '-100%',
      duration: 1,
      ease: 'back',
      stagger: 0.05,
    })
  })
  useGSAP(() => {
    gsap.from('.work__client-wrapper_mobile', {
      rotate: '90deg',
      duration: 4,
      ease: 'none',
      transformOrigin: 'left',
      stagger: 0.5,
    })
  })


  return (
    <div className='work'>
      {/* ------------------ DESKTOP VERSION -------------------- */}
      <div className='work__header'>
        <h2>WORK</h2>
        <h3>Al Tomizawa - Art Director</h3>
      </div>
      <ul className='work__clients'>
        <li className='work__client-wrapper'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>JBL</a>
        </li>
        <li className='work__client-wrapper' id='two'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>UNCLE BEN'S</a>
        </li>
        <li className='work__client-wrapper' id='three'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>PLAYSTATION</a>
        </li>
        <li className='work__client-wrapper' id='four'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>PENNZOIL</a>
        </li>
        <li className='work__client-wrapper' id='five'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>MICHELOB</a>
        </li>
        <li className='work__client-wrapper' id='six'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>RAIN-X</a>
        </li>
        <li className='work__client-wrapper' id='seven'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>SOCOM</a>
        </li>
        <li className='work__client-wrapper' id='eight'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>WHISKAS</a>
        </li>
        <li className='work__client-wrapper' id='nine'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>HOOVER</a>
        </li>
        <li className='work__client-wrapper' id='ten'>
          <div className='work__client-line'></div>
          <a className='work__client-link'>PERSONAL<br></br>WORK</a>
        </li>
      </ul>

      {/* ------------------ MOBILE VERSION -------------------- */}
      <div className='work__header_mobile'>
        <h2>WORK</h2>
        <h3>Al Tomizawa - Art Director</h3>
      </div>
      <ul className='work__clients_mobile'>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>JBL</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>UNCLE BEN'S</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>PLAYSTATION</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>PENNZOIL</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>MICHELOB</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>RAIN-X</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>SOCOM</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>WHISKAS</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>HOOVER</a>
        </li>
        <li className='work__client-wrapper_mobile'>
          <div className='work__client-line_mobile'></div>
          <a className='work__client-link_mobile'>PERSONAL WORK</a>
        </li>
      </ul>
    </div>
  )
}

export default Work
