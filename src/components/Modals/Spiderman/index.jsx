import { useContext } from 'react';
import { AppContext } from '../../../context';
import './styles.css';

function ModalSpiderman() {
  const {setOpenModalSpiderman} = useContext(AppContext)
  
  const closeSpidermanModal = () => {
    setOpenModalSpiderman(false)
  }
  
  return (
    <div className="modal-spiderman">
      <div className="modal-content">
        <img
          className="modal-spiderman-img"
          src="/src/assets/close.svg"
          alt="close"
          onClick={() => closeSpidermanModal()}
        />
        <div className='modal__content--slider'>
          <input type="radio" name='slider-1' id='radio-1' checked/>
          <input type="radio" name='slider-2' id='radio-2'/>
          <input type="radio" name='slider-3' id='radio-3'/>

        </div>
      </div>
    </div>
  );
}

export { ModalSpiderman };
