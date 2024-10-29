import NavBar from './NavBar';
import Logo from '../assets/images/lemon logo.jpg';
import Basket from '../assets/images/basket .svg'

function Header() {
  return (
    <>
      <header className='page-header'>
        <div className='logo-container'>
          <img src={Logo} className='logo' alt='brand logo' />
          <img src={Basket} className='basket' alt='basket' />
        </div>

        <NavBar />
      </header>
    </>
  )
}

export default Header
