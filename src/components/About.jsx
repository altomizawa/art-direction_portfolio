import './About.css'
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

  useGSAP(() => {
    const array = ['#lineOne_mobile', '#lineTwo_mobile', '#lineThree_mobile', '#lineFour_mobile', '#lineFive_mobile', '#lineSix_mobile', '#lineSeven_mobile','#lineEight_mobile', '#lineNine_mobile', '#lineTen_mobile', '#lineEleven_mobile', '#lineTwelve_mobile']

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
      {/* ------------------------- DESKTOP VERSION -------------------------- */}
      <div className='about-wrapper'>
        <h2 className='about-text'>I was born and raised in Brazil.<span id='lineOne' className='about__overlay'></span></h2>
        <h2 className='about-text'>After college I moved to Atlanta<span id='lineTwo' className='about__overlay'></span></h2>
        <h2 className='about-text'>where I had my specialization in<span id='lineThree' className='about__overlay'></span></h2>
        <h2 className='about-text'>Art Direction.<span id='lineFour' className='about__overlay'></span></h2>
        <h2 className='about-text'>Later, I ended up moving to NYC<span id='lineFive' className='about__overlay'></span></h2>
        <h2 className='about-text'>and working for <a href="https://www.bartleboglehegarty.com/" target='_blank'>BBH NY</a> and<span id='lineSix' className='about__overlay'></span></h2>
        <h2 className='about-text'><a href="https://tbwachiatdayla.com/" target='_blank'>TBWA\Chiat\Day</a> Los Angeles.<span id='lineSeven' className='about__overlay'></span></h2>
      </div>
     
      {/* ------------------------- MOBILE VERSION -------------------------- */}
      <div className='about-wrapper_mobile'>
        <h2 className='about-text_mobile'>I was born and<span id='lineOne_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>raised in Brazil.<span id='lineTwo_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>After college <span id='lineThree_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>I moved to Atlanta<span id='lineFour_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>where I had my<span id='lineFive_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>specialization in<span id='lineSix_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>Art Direction.<span id='lineSeven_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>Later, I ended up<span id='lineEight_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>moving to NYC and<span id='lineNine_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>working for <a href="https://www.bartleboglehegarty.com/" target='_blank'>BBH NY</a> and<span id='lineTen_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'>and <a href="https://tbwachiatdayla.com/" target='_blank'>TBWA\Chiat\Day</a><span id='lineEleven_mobile' className='about__overlay_mobile'></span></h2>
        <h2 className='about-text_mobile'> Los Angeles.<span id='lineTwelve_mobile' className='about__overlay_mobile'></span></h2>
      </div>
    </div>
  )
}

export default About
