const Contact = () => {
  return (
    <section className="section section-container contact" id="ubicacion">
      <h2 className="section-title">Nuesta Ubicación</h2>
      <article className="contact-grid">
        <iframe
          width="870"
          height="450"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com.mx/maps?f=q&amp;source=s_q&amp;hl=es-419&amp;geocode=&amp;q=motel+jardin&amp;aq=0&amp;oq=motel+jardin&amp;sll=23.554131,-102.6205&amp;sspn=33.829995,67.631836&amp;ie=UTF8&amp;hq=motel+jardin&amp;hnear=&amp;t=m&amp;ll=20.725612,-103.343883&amp;spn=0.018062,0.029998&amp;z=15&amp;output=embed"
        ></iframe>
        <div className="contact-details">
          <h3>Domicilio</h3>
          <ul>
            <li>
              Carretera a Saltillo (Prolongacion Alcalde) No. 86
              <br />
              Col. El Batan, Zapopan Jal.
              <br />
            </li>
            <li>
              36 60 21 94
              <br />
              36 60 47 74
            </li>
            <li>
              <a href="mailto:mjardin1@hotma" className="mail-link">
                mjardin1@hotmail.com
              </a>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Contact;
