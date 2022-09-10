import { useState, useEffect } from 'react';

const Aside = () => {
  const [show, setShow] = useState(false);
  const screenHeight = window.innerHeight;
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > screenHeight / 2) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  const top = (e) => {
    e.preventDefault();
    const Target = e.target;

    const href = Target.getAttribute('href')
      ? Target.getAttribute('href')
      : Target.parentElement.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <a href="#inicio" className={`Aside ${show ? 'show' : ''}`} onClick={top}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 14.15"
        onClick={top}
      >
        <g>
          <g>
            <path d="M2.15,14.15,0,12,12,0,24,12,21.85,14.1,12,4.25Z" />
          </g>
        </g>
      </svg>
    </a>
  );
};
export default Aside;
