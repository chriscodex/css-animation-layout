import { useContext } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { Modal } from './components/Modals/Modal';
import { ModalSpiderman } from './components/Modals/Spiderman';
import { ModalRobin } from './components/Modals/Robin';
import { ModalBatman } from './components/Modals/Batman';
import { AppContext } from './context';
import './App.css';

function App() {
  const { openModalSpiderman, openModalRobin, openModalBatman } = useContext(AppContext);

  return (
    <>
      <div className="page">
        {/* Main content */}
        <section className="container">
          <Navbar />

          <MainContent />

          <section className="side-content">
            <div></div>
            <p>Superman</p>
            <img src="https://i.ibb.co/x16pz1x/super-man.png" alt="superman" />
          </section>
          <Footer />
        </section>
        {/* Loader */}
          <Loader />
        {/* Modals */}
        <section>
          {openModalSpiderman && (
            <Modal>
              <ModalSpiderman />
            </Modal>
          )}
          {openModalRobin && (
            <Modal>
              <ModalRobin />
            </Modal>
          )}
          {openModalBatman && (
            <Modal>
              <ModalBatman />
            </Modal>
          )}
        </section>
      </div>
    </>
  );
}

export default App;
