import { useContext } from 'react';
import { AppContext } from '../../../context';
import './styles.css';

function ModalSpiderman() {
  const { setOpenModalSpiderman } = useContext(AppContext);

  const closeSpidermanModal = () => {
    setOpenModalSpiderman(false);
  };

  return (
    <div className="modal-spiderman">
      <div className="modal-content">
        <img
          className="modal-spiderman--close"
          src="/src/assets/close.svg"
          alt="close"
          onClick={() => closeSpidermanModal()}
        />
        <div className="modal__content--slider">
          <input type="radio" name="slider-1" id="radio-1" checked />
          <input type="radio" name="slider-1" id="radio-2" checked />
          <input type="radio" name="slider-1" id="radio-3" checked />

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
      </div>
    </div>
  );
}

export { ModalSpiderman };
