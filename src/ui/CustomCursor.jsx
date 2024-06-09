import './CustomCursor.css'
import { useEffect } from 'react'

function CustomCursor() {
  
  const followCursor = () => {
    const cursor = document.querySelector('customcursor')
    console.log('hello')
    }
    
  document.addEventListener('mousemove', () => {
    console.log('hello')
  })

  useEffect(() => {
    followCursor();
  },[document])
  return (
    <div className='customcursor'>
    </div>
  )
}

export default CustomCursor
