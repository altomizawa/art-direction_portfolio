import { db } from '../../database/db'
import { useParams } from 'react-router-dom'
import './Client.css'

export default function Client() {
  const params = useParams();
  const filteredArray = db.filter((item) =>item.name.toLowerCase()===params.client)
  const client = filteredArray[0]

  const Video = () => {
    return (
      <>
        {client.videoLinks.map((video) => {
          return (
            <div key={video.id} className='client__video-wrapper'>
              <iframe className='client__video' width="560" height="315" src={video.link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          )
        })}
      </>
    )
  }

  return (
    <div className='client'>
      <div className='client__title-wrapper'>
        <h1>{client.campaign}</h1>
        <div></div>
        <h2>{client.name}</h2>
      </div>
      <p className='client__description'>{client.description}</p>
      {client.hasVideo && <Video />}
      {client.hasPrint && client.imageLinks.map((image) => {
      return (
        <div className='client__image-wrapper' key={image.id}>
          <p>{image.name.toUpperCase()}</p>
          <img src={image.link} />
        </div>
      )
      })}
      
    </div>
    
  )
}
