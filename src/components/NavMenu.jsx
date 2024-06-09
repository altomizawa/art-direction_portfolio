import './NavMenu.css'

function NavMenu({ isMenuOpen }) {
  

  return (
    <div className={isMenuOpen ? 'navmenu' : 'navmenu navmenu_hidden'}>
      <a href='/' className='navmenu__link'>HOME</a>
      <a href='/work' className='navmenu__link'>WORK</a>
      <a href='/contact' className='navmenu__link'>LET'S TALK</a>
    </div>
  )
}

export default NavMenu