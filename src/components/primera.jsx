import check from "../assets/icons8-cuenta-verificada-96.png";
import cross from "../assets/icons8-cancelar-24.png";
import plane from "../assets/asientos-avion_103.webp";
import "./primera.css";

function Primera() {
  return (
    <div className="modal">
      <div className="modal__image">
        <img src={cross} alt="" className="modal__image--cancel" />
        <img src={plane} alt="" className="modal__image--one" />
      </div>
      <div className="modal__title">
        <span className="modal__title--span">
          Disfrutá de Primera por{" "}
          <span className="modal__title--second">ARS 35.807</span>
        </span>
        <span className="modal__title--span">adicionales!</span>
      </div>
      <div className="modal__table">
        <div>
          <p></p>
          <span>Business</span>
          <span>Primera</span>
        </div>
        <div>
          <span>Descenso prioritario #1</span>
          <p>
            <img src={cross} alt="" className="modal__table--decline--cross" />
          </p>
          <img src={check} alt="" className="modal__table--decline--check" />
        </div>
        <div>
          <span>
            Asientos reclinables 180°
            <p className="modal__table--seat--2--note">
              con cargador USB y luz de lectura
            </p>
          </span>
          <p>
            <img src={cross} alt="" className="modal__table--decline--cross" />
          </p>
          <img src={check} alt="" className="modal__table--decline--check" />
        </div>
        <div>
          <span>Lounge con vista panorámica</span>
          <p>
            <img src={cross} alt="" className="modal__table--decline--cross" />
          </p>
          <img src={check} alt="" className="modal__table--decline--check" />
        </div>
        <div>
          <span>Servicio gastronómico exclusivo</span>
          <p>
            <img src={cross} alt="" className="modal__table--decline--cross" />
          </p>
          <img src={check} alt="" className="modal__table--decline--check" />
        </div>
        <div>
          <span>Servicio abordo personalizado</span>
          <p>
            <img src={cross} alt="" className="modal__table--decline--cross" />
          </p>
          <img src={check} alt="" className="modal__table--decline--check" />
        </div>
      </div>
      <span className="modal__note">
        *Diferencia respecto a precio unitario de referencia por adulto
      </span>
      <div className="modal__button">
        <button className="modal__button--first">Quiero Primera</button>
        <button className="modal__button--business">Seguir en Business</button>
      </div>
    </div>
  );
}

export default Primera;
