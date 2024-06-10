import scrollIcon from '../../public/assets/scroll2.json'
import Lottie from 'lottie-react';

import './Home.css'
import About from '../components/About';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

function Home() {

  return (
    <div className='home'>
      <div className='home__hero'>
        <div className='home__title'>
          <div className='home__title-wrapper'>
            <h1>HELLO, I'M AL TOMIZAWA
              <br></br>WELCOME TO MY SITE
            </h1>
            <p>(SCROLL DOWN TO SEE MORE)</p>
          </div>
        </div>
        <Lottie className='lottie' animationData={scrollIcon} loop={true} />
      </div>
      <About />
      <Clients />
      <Footer />
    </div>
  )
}

export default Home
