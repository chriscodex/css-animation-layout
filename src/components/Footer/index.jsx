import { useContext } from 'react';
import { AppContext } from '../../context';
import './styles.css';

function Footer() {
  const {setOpenModalSpiderman, setOpenModalRobin, setOpenModalBatman} = useContext(AppContext)
  
  const openModalSpidermanHandler = () => {
    setOpenModalSpiderman(true)
  }
  const openModalRobinHandler = () => {
    setOpenModalRobin(true)
  }
  const openModalBatmanHandler = () => {
    setOpenModalBatman(true)
  }
  
  return (
    <div className='footer'>
      <div onClick={() => openModalSpidermanHandler()}>
        <img src="https://i.ibb.co/tKWqw8J/spiderman.png" alt="spiderman" />
      </div>
      <div onClick={() => openModalRobinHandler()}>
        <img src="https://i.ibb.co/Xzsdvgg/robin.png" alt="robin" />
      </div>
      <div onClick={() => openModalBatmanHandler()}>
        <img src="https://i.ibb.co/M18p91c/batman.webp" alt="batman" />
      </div>
    </div>
  );
}

export { Footer };
