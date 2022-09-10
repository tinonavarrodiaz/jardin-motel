import { useState } from 'react';

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="main-footer">
      <p>
        © {year} Motel Jardín | Desarrollado por:{' '}
        <a href="https://nh-digital.dev" target="_blank">
          NH Digital
        </a>
      </p>
    </footer>
  );
};

export default Footer;
