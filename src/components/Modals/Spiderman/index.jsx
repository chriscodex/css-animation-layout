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

          <div className='card'>
            <label htmlFor="radio-1" className='card-1'>
              <img src="" alt="" />
            </label>
            <label htmlFor="radio-2" className='card-2'>
              <img src="" alt="" />
            </label>
            <label htmlFor="radio-3" className='card-3'>
              <img src="" alt="" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalSpiderman };
