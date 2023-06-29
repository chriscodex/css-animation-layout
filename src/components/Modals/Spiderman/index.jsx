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
      </div>
    </div>
  );
}

export { ModalSpiderman };
