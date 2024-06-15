import './Clients.css'
import Client from './client/Client'
import { db } from '../database/db'
import { useParams } from 'react-router-dom'

function Clients() {
  const params = useParams();

  return (
    <div className='navclients'>
      <Client />
      <nav className='navclients__nav'>
        <div>
          {db.map((client) => <a href={`/work/clients/${client.name.toLowerCase()}`} key={client.id} className={client.name.toLowerCase()===params.client ? 'navclients__link_active' : 'navclients__link'}>{client.name.toUpperCase()}</a>)}
        </div>
      </nav>
    </div>
  )
}

export default Clients
