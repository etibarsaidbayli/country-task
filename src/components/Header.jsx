import {Link} from 'react-router-dom'


function Header() {
  return (
    <header>
     <Link to="/">
        <div className="header__logo">Countries-app</div>
     </Link>
    </header>
  );
}

export default Header;
