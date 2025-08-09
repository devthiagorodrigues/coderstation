import './App.css';
import Header from './components/Header/Header.js';
import HeaderContent from './components/HeaderContent/HeaderContent.js';
import Categoria from './components/Categoria/Categoria.js'
import Cursos from './components/Cursos/Cursos.js'
import Parceiras from './components/Parceiras/Parceiras.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderContent />
      <Categoria />
      <Cursos />
      <Parceiras />
      <Footer />
    </div>
  );
}

export default App;
