import parse from 'html-react-parser';
import rooms from '../helpers/rooms';

const Rooms = () => {
  return (
    <section className="section section-container rooms" id="habitaciones">
      <h2 className="section-title">Nuestras Habitaciones</h2>
      <article className="rooms-grid">
        {rooms.map((room, i) => (
          <div className="room" key={i}>
            <img src={room.img} alt={room.name} />
            <h3 className="room-title">{room.name}</h3>
            <ul className="room-description">{parse(room.description)}</ul>
            <p className="room-price">
              Precio ${room.precio}.00 / Persona Extra: ${room.precio / 2}.00
            </p>
          </div>
        ))}
      </article>
      <ul className="notes">
        <li>
          La habitacion es maximo para 4 (cuatro) por habitacion pagando por
          cada persona extra.
        </li>
        <li>Solo se permite la entrada a mayores de 18 años.</li>
        <li>Los Precios ya incluyen I.V.A. e impustos de hospedaj.</li>
        <li>
          Aceptamos tarjetas de cédito y débito (Excepto american Express),
          previa identificacion oficial, no cobramos ningún tipo de comisión,
          discrecion en su estado de cuenta.
        </li>
        <li>
          El tiempo de la habitacion es de:
          <ul>
            <li> Lunes a Jueves de 12: hrs. </li>
            <li> Viernes Sabado, Domingo y dias festivos por 8hrs.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default Rooms;
