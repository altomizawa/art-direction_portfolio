import './NavButton.css'

function NavButton({ isMenuOpen, setIsMenuOpen }) {
  
  return (
    <div className={isMenuOpen ? 'navbutton navbutton_active' : 'navbutton'} onClick={() => {setIsMenuOpen(prev=>!prev)}}>
      <div className={isMenuOpen ? 'navbutton__menu-line navbutton__menu-line_top' : 'navbutton__menu-line'}></div>
      <div className={isMenuOpen ? 'navbutton__menu-line navbutton__menu-line_middle' : 'navbutton__menu-line'}></div>
      <div className={isMenuOpen ? 'navbutton__menu-line navbutton__menu-line_bottom' : 'navbutton__menu-line'}></div>
    </div>
  )
}

export default NavButton
