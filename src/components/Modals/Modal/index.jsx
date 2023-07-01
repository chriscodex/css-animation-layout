import { createPortal } from 'react-dom';
import './styles.css'

function Modal({ children }) {
  return createPortal(<div>{children}</div>, document.getElementById('modal'));
}

export { Modal };
