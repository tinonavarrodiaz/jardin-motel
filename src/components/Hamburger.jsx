const Hamburger = ({ manejarClick, active = false }) => {
  return (
    <button
      onClick={manejarClick}
      className={`hamburger hamburger--squeeze toggle-menu ${
        active ? 'is-active' : ''
      }`}
      type="button"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
