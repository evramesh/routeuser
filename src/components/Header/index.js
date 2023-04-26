import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div>
    <ul className="ul">
      <Link to="/">
        <li className="list">Home</li>
      </Link>
      <Link to="/about">
        <li className="list">About</li>
      </Link>
    </ul>
  </div>
)

export default Header
