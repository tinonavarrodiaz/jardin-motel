import { useState, useRef, useEffect } from 'react';
import menu from '../helpers/menu';
import Hamburger from './Hamburger';
import logo from '../img/logo.png';

const Header = () => {
  const nav = useRef();
  const [active, setActive] = useState(false);
  const screenHeight = window.innerHeight;
  const header = useRef();
  const toggleMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  useEffect(() => {
    // const li = [...header.current.querySelectorAll('li > a')];
    // let liHash = [];
    // li.map((el) => liHash.push(el.getAttribute('href')));
    // console.log(liHash);
    window.addEventListener('scroll', () => {
      let scrollYPos = scrollY;
      if (scrollYPos >= screenHeight) {
        header.current.classList.add('fixed');
      } else {
        header.current.classList.remove('fixed');
      }
    });
  }, []);

  const navClick = (e) => {
    e.preventDefault();
    const Target = e.target;
    if (Target.tagName === 'A') {
      const href = Target.getAttribute('href');
      console.dir(href);
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="Header" ref={header}>
      <a href="#inicio" className="main-title">
        <img src={logo} alt="" />
        <span>
          Carretera a Saltillo (Prolongacion Alcalde) No. 86, Col. El Batan,
          Zapopan
        </span>
      </a>
      <nav className="main-nav" ref={nav} onClick={navClick}>
        <Hamburger active={active} manejarClick={toggleMenu} />
        <ul className={`main-menu ${active ? 'is-active' : ''}`}>
          {menu.map((item, i) => (
            <li className="main-menu__item" key={i}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
