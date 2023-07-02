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
                src="https://static.platzi.com/media/public/uploads/spider-man_db8af43d-b692-4986-a385-e645d286e142.png"
                alt="Spiderman"
              />
            </label>
            <label htmlFor="radio-2" id="card-2" className="card">
              <img
                src="https://static.platzi.com/media/public/uploads/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png"
                alt="Spiderman"
              />
            </label>
            <label htmlFor="radio-3" id="card-3" className="card">
              <img
                src="https://static.platzi.com/media/public/uploads/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png"
                alt="Spiderman"
              />
            </label>
          </div>
        </div>
        <button className="modal__button">Comprar</button>
      </div>
    </div>
  );
}

export { ModalSpiderman };
