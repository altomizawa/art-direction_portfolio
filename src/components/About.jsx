import './About.css'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function About() {

  useGSAP(() => {
      const array = ['#lineOne', '#lineTwo', '#lineThree', '#lineFour', '#lineFive', '#lineSix', '#lineSeven']

      array.forEach((line) => {
        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            start: 'top 60%',
            end: 'top 30%',
            scrub: 1,
          },
          duration: 10,
          x: '90vw',
        })

      })
      
    });


  return (
    <div className='about'>
      <div className='about-wrapper'>
        <div className='about__line-wrapper'>
          <h2 className='about-text'>I was born and raised in Brazil.</h2>
          <div id='lineOne' className='about__overlay'></div>
        </div>
        <div className='about__line-wrapper'>
          <h2 className='about-text'>After college I moved to Atlanta</h2>
          <div id='lineTwo' className='about__overlay'></div>
        </div>
        <div className='about__line-wrapper'>
          <h2 className='about-text'>where I had my specialization in</h2>
          <div id='lineThree' className='about__overlay'></div>
        </div>
        <div className='about__line-wrapper'>
          <h2 className='about-text'>Art Direction.</h2>
          <div id='lineFour' className='about__overlay'></div>
        </div>
        <div className='about__line-wrapper'>
          <h2 className='about-text'>Later, I ended up moving to NYC</h2>
          <div id='lineFive' className='about__overlay'></div>
        </div>
        <div className='about__line-wrapper'>
          <h2 className='about-text'>and working for <a href="https://www.bartleboglehegarty.com/" target='_blank'>BBH NY</a> and</h2>
          <div id='lineSix' className='about__overlay'></div>
        </div>
        <div className='about__line-wrapper'>
          <h2 className='about-text'><a href="https://tbwachiatdayla.com/" target='_blank'>TBWA\Chiat\Day</a> Los Angeles.</h2>
          <div id='lineSeven' className='about__overlay'></div>
        </div>        
      </div>
    </div>
  )
}

export default About
