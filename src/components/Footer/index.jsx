import { useContext } from 'react';
import { AppContext } from '../../context';
import './styles.css';

function Footer() {
  const {setOpenModalSpiderman} = useContext(AppContext)
  
  const openModalHandler = () => {
    setOpenModalSpiderman(true)
  }
  
  return (
    <div className='footer'>
      <div onClick={() => openModalHandler()}>
        <img src="https://i.ibb.co/tKWqw8J/spiderman.png" alt="spiderman" />
      </div>
      <div>
        <img src="https://i.ibb.co/Xzsdvgg/robin.png" alt="robin" />
      </div>
      <div>
        <img src="https://i.ibb.co/M18p91c/batman.webp" alt="batman" />
      </div>
    </div>
  );
}

export { Footer };
