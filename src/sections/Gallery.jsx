import { useState, useRef, useEffect } from 'react';
// import '../helpers/habitaciones.js';
import habitaciones from '../helpers/habitaciones1.js';
import close from '../img/close.svg';
import next from '../img/next.svg';
import prev from '../img/prev.svg';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const img = useRef();
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--imgwidth',
      `${img.current.clientWidth}px`
    );
  }, []);

  const modalPrev = (modal, index) => {
    const total = habitaciones.length - 1;
    let show = index > 0 ? index-- : total;
    console.log(total, index, show);
    const room = habitaciones[show];
    modal.remove();
    modalCreate(room.img, room.title, room.orientation, index);
  };
  const modalNext = (modal, index) => {
    const total = habitaciones.length - 1;
    let show = index < total ? index++ : 0;
    console.log(total, index, show);
    const room = habitaciones[show];
    modal.remove();
    modalCreate(room.img, room.title, room.orientation, index);
  };

  const modalCreate = (img, text, orientation, index) => {
    let modal = document.createElement('div');
    modal.className = 'modal close';
    modal.innerHTML = `
    <div class="modal-content ${orientation}">
        <button class="modal-close close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.3 27.3" class="close"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path d="M2.1,27.3,0,25.2,11.55,13.65,0,2.1,2.1,0,13.65,11.55,25.2,0l2.1,2.1L15.75,13.65,27.3,25.2l-2.1,2.1L13.65,15.75Z"/></g></g></svg>
        </button>
        <button class="modal-btn prev modal-prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 40" class="modal-prev"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path d="M20,40,0,20,20,0l2.8,2.85L5.65,20,22.8,37.15Z"/></g></g></svg>
        </button>
        <button class="modal-btn next modal-next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.8 40" class="modal-next"><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path d="M2.8,40,0,37.15,17.15,20,0,2.85,2.8,0l20,20Z"/></g></g></svg>
        </button>
        <img src='${img}' alt="${text}" class="modal-image">
        <p class="modal-title">${text}</p>
      </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflowY = 'hidden';
    modal.addEventListener('click', (e) => {
      const Target = e.target;
      // console.dir(Target.classList.contains('close'));
      if (Target.classList.contains('close')) {
        document.body.style.overflowY = 'auto';
        modal.remove();
      }
      if (Target.classList.contains('modal-next')) {
        modalNext(modal, index);
      }
      if (Target.classList.contains('modal-prev')) {
        console.log('prev');
        modalPrev(modal, index);
      }
    });
  };

  const modal = (e) => {
    e.preventDefault();
    modalCreate(
      e.target.dataset.img,
      e.target.dataset.roomtype,
      e.target.dataset.orientation,
      parseInt(e.target.dataset.index)
    );
  };

  return (
    <section className="section-container gallery" id="galeria">
      <h2 className="section-title">Galeria de Imágenes</h2>
      <div className="gallery-grid">
        {habitaciones.map((room, i) => (
          <a
            href={room.img}
            className="gallery-item"
            title={room.title}
            data-index={i}
            data-roomtype={room.title}
            data-orientation={room.orientation ? room.orientation : 'landscape'}
            key={i}
            ref={img}
            onClick={modal}
          >
            <img
              src={room.img}
              alt={room.title}
              data-index={i}
              data-img={room.img}
              data-roomtype={room.title}
              data-orientation={
                room.orientation ? room.orientation : 'landscape'
              }
            />
          </a>
        ))}
      </div>
    </section>
  );
}
