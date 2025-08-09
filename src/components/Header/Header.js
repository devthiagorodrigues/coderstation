import './style.css'
import Logo from '../../images/logo.svg'

export default function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <img src={Logo} alt=""></ img>
        <h1><span>Code</span>Station</h1>
      </div>

      {/* <nav>
        <ul className='header-menu'>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </nav> */}
    </header>
  )
}
