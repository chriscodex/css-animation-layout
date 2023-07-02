import { useContext } from 'react';
import { AppContext } from '../../../context';
import './styles.css';

function ModalRobin() {
  const { setOpenModalRobin } = useContext(AppContext);

  const closeRobinModal = () => {
    setOpenModalRobin(false);
  };

  return (
    <div className="modal-spiderman">
      <div className="modal-content">
        <img
          className="modal-spiderman--close"
          src="/src/assets/close.svg"
          alt="close"
          onClick={() => closeRobinModal()}
        />
        <div className="modal__content--slider">
          <input type="radio" name="slider-2" id="radio-1" defaultChecked />
          <input type="radio" name="slider-2" id="radio-2" />
          <input type="radio" name="slider-2" id="radio-3" />

          <div className="cards">
            <label htmlFor="radio-1" id="card-1" className="card">
              <img
              />
            </label>
            <label htmlFor="radio-2" id="card-2" className="card">
              <img
              />
            </label>
            <label htmlFor="radio-3" id="card-3" className="card">
              <img
              />
            </label>
          </div>
        </div>
        <button className="modal__button">Comprar</button>
      </div>
    </div>
  );
}

export { ModalRobin };