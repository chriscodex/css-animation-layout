import { useContext } from 'react';
import { AppContext } from '../../../context';

function ModalBatman() {
  const { setOpenModalBatman } = useContext(AppContext);

  const closeBatmanModal = () => {
    setOpenModalBatman(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img
          className="modal-content--close"
          src="/src/assets/close.svg"
          alt="close"
          onClick={() => closeBatmanModal()}
        />
        <div className="modal__content--slider">
          <input type="radio" name="slider-2" id="radio-1" defaultChecked />
          <input type="radio" name="slider-2" id="radio-2" />
          <input type="radio" name="slider-2" id="radio-3" />

          <div className="cards">
            <label htmlFor="radio-1" id="card-1" className="card">
              <img
                src="/src/assets/Carrousel/batman.png"
                alt="Batman"
              />
            </label>
            <label htmlFor="radio-2" id="card-2" className="card">
              <img
                src="https://i.ibb.co/M18p91c/batman.webp"
                alt="Batman"
              />
            </label>
            <label htmlFor="radio-3" id="card-3" className="card">
              <img
                src="/src/assets/Carrousel/batman2.png"
                alt="Batman"
              />
            </label>
          </div>
        </div>
        <button className="modal__button">Comprar</button>
      </div>
    </div>
  );
}

export { ModalBatman };
