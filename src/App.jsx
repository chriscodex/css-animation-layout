import { Loader } from './components/Loader'
import './App.css'

function App() {
  return (
    <>
      <div className="page">
        {/* Main content */}
        {console.log('yara mano')}
        <section className='container'>
          <nav className="navbar">
            <div className="navbar-content">
              <img src="/src/assets/lego.png" alt="lego-icon" />
              <ul>
                <li><a href="/">EXCLUSIVOS</a></li>
                <li><a href="/">NUEVOS</a></li>
                <li><a href="/">GIFT CARD</a></li>
                <li><a href="/">FIND A STORE</a></li>
              </ul>
            </div>
          </nav>

          <section className='main-content'>
            <p>Diseña tu</p>
            <h1>Súper Héroe</h1>
            <p>Aquí podrás dar rienda suelta a tu creatividad y construir tu propio superhéroe LEGO personalizado. Nuestro sitio ofrece una amplia gama de opciones exclusivas y los últimos lanzamientos de LEGO. ¡Prepárate para sumergirte en el mundo de la construcción y la imaginación con LEGO!</p>
          </section>

          <section className='side-content'>
            <div></div>
            <p>Superman</p>
            <img src="https://i.ibb.co/x16pz1x/super-man.png" alt="superman" />
          </section>

          <section>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </section>
        </section>
        {/* Loader */}
        <section className="loader">
          <Loader />
        </section>
        {/* Modal */}
        <section></section>
      </div>
    </>
  )
}

export default App
