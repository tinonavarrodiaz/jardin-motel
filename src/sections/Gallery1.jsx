import { useState, useRef, useEffect } from 'react';
import rooms from '../helpers/habitaciones1.js';

const createModal = (index) => {
  const roomsTotal = rooms.length - 1;
  const showRoom = rooms[index];
  const modal = document.createElement('div');
  const orientation = showRoom.orientation ? showRoom.orientation : '';
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
        <img src='${showRoom.img}' alt="${showRoom.title}" class="modal-image">
        <p class="modal-title">${showRoom.title}</p>
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
      modal.remove();
      const ind = index < roomsTotal ? index + 1 : 0;
      createModal(ind);
    }
    if (Target.classList.contains('modal-prev')) {
      modal.remove();
      const ind = index === 0 ? roomsTotal : index - 1;
      createModal(ind);
    }
  });
};

const Gallery = () => {
  const img = useRef();
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--imgwidth',
      `${img.current.clientWidth}px`
    );
  }, []);

  const click = (e) => {
    const Target = e.target;
    createModal(parseInt(Target.dataset.index));
  };
  return (
    <section className="section section-container  gallery" id="galeria">
      <h2 className="section-title">Galeria de fotos</h2>
      <article className="gallery-grid" onClick={click}>
        {rooms.map((room, i) => (
          <figure className="gallery-item" key={i} data-index={i}>
            <img src={room.img} alt={room.title} ref={img} />
          </figure>
        ))}
      </article>
    </section>
  );
};

export default Gallery;
