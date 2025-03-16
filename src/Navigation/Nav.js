import { AiOutlineUserAdd, AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai';
import "./Nav.css";

function Nav() {
  return <nav>
     <div className='logo-container'>
        <img src='logo_fokker.png' alt='logo' className='menu-logo' />
        <img src='logo_black.png' alt='logo' className='main-logo' />
        </div>
    <div className="nav-container">
      <input type="text"
      className="search-input"
      placeholder="Search for your product..." />
    </div>
    <div className="profile-container">
      <a href="#">
<AiOutlineUserAdd className='nav-icons'/>
      </a>

      <a href="#">
<AiOutlineShoppingCart className='nav-icons'/>
      </a>

      <a href="#">
<AiOutlineLogout className='nav-icons'/>
      </a>

      </div>
    </nav>
}

export default Nav