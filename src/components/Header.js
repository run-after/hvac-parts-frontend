import '../styles/Header.css';

function Header() {

  return (
    <header className='header'>
      <ul>
        <li><a href='/'>home</a></li>
        <li><a href='/equipment'>equipment</a></li>
        <li><a href='/parts'>parts</a></li>
      </ul>
    </header>
  );
  
};

export default Header;