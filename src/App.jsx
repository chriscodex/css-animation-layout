import { useContext } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { MainContent } from './components/MainContent';
import { SideContent } from './components/SideContent';
import { Footer } from './components/Footer';
import { Modal } from './components/Modals/Modal';
import { ModalSpiderman } from './components/Modals/Spiderman';
import { ModalRobin } from './components/Modals/Robin';
import { ModalBatman } from './components/Modals/Batman';
import { AppContext } from './context';
import './App.css';

function App() {
  const { openModalSpiderman, openModalRobin, openModalBatman } =
    useContext(AppContext);

  return (
    <>
      <div className="page">
        {/* Main content */}
        <section className="container">
          <Navbar />

          <MainContent />

          <SideContent />

          <Footer />
        </section>
        {/* Loader */}
        <Loader />
        {/* Modals */}
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
      </div>
    </>
  );
}

export default App;
