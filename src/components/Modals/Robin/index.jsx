import { useContext } from 'react';
import { AppContext } from '../../../context';
import './styles.css';

function ModalRobin() {
  const { setOpenModalRobin } = useContext(AppContext);

  const closeRobinModal = () => {
    setOpenModalRobin(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img
          className="modal-content--close"
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
                src="/src/assets/Carrousel/robin.png"
                alt="Robin"
              />
            </label>
            <label htmlFor="radio-2" id="card-2" className="card">
              <img
                src="https://i.ibb.co/Xzsdvgg/robin.png"
                alt="Robin"
              />
            </label>
            <label htmlFor="radio-3" id="card-3" className="card">
              <img
                src="https://www.pngkit.com/png/full/116-1167749_robin-heroes-lego-batman-superman.png"
                alt="Robin"
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
