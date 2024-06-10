import './Clients.css'

function Clients() {
  return (
    <div className='clients'>
      <div className='clients__line'></div>
      <h2 className='clients__title'>HERE ARE SOME OF THE BRANDS I DID WORK FOR:</h2>
      <div className='clients__carousel'>
        <h3 className='clients__names'>PENNZOIL<span>WHISKAS</span>JBL<span>UNCLEBEN'S</span>ANHEUSER-BUSCH<span>PLAYSTATION</span>PENNZOIL<span>WHISKAS</span>JBL<span>UNCLEBEN'S</span>ANHEUSER-BUSCH</h3>
        <h3 className='clients__names clients__names_reverse'>PENNZOIL<span>WHISKAS</span>JBL<span>UNCLEBEN'S</span>ANHEUSER-BUSCH<span>PLAYSTATION</span>PENNZOIL<span>WHISKAS</span>JBL<span>UNCLEBEN'S</span>ANHEUSER-BUSCH</h3>
      </div>
      <a href='/work' className='clients__link'>SEE MY WORK</a>
    </div>
  )
}

export default Clients
