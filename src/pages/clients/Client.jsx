import { db } from '../../database/db'
import { useParams } from 'react-router-dom'
import './Client.css'

export default function Client() {
  const params = useParams();
  const filteredArray = db.filter((item) =>item.name.toLowerCase()===params.client)
  const client = filteredArray[0]
  return (
    <div className='client'>
      <div className='client__title-wrapper'>
        <h1>{client.campaign}</h1>
        <div></div>
        <h2>{client.name}</h2>
      </div>
      <p className='client__description'>{client.description}</p>
      {client.imageLinks.map((image) => {
      return (
        <div className='client__image-wrapper' key={image.id}>
          <p>{image.name.toUpperCase()}</p>
          <img src={image.link} />
        </div>
      )
      })}
      <nav className='client__nav'>
        <div>
          {db.map((client) => <a href={`/work/${client.name.toLowerCase()}`} key={client.id} className={client.name.toLowerCase()===params.client ? 'client__link_active' : 'client__link'}>{client.name}</a>)}
        </div>
      </nav>
    </div>
    
  )
}
