import './style.css';
import imgHardware from '../../images/icon-hardware.svg'
import imgSoft from '../../images/icon-softskills.svg'
import imgApi from '../../images/icon-api.svg'
import imgFull from '../../images/icon-full.svg'

export default function Categoria() {
  const categorias = [
    {
      icon: imgHardware,
      titulo: "Hardware",
      quantidade: "3 Cursos",
      backgroundColor: "#EBEBFF"
    },
    {
      icon: imgSoft,
      titulo: "Softskills",
      quantidade: "5 Cursos",
      backgroundColor: "#E1F7E3" 
    },
    {
      icon: imgApi,
      titulo: "API",
      quantidade: "2 Cursos",
      backgroundColor: "#FFF2E5" 
    },
    {
      icon: imgFull,
      titulo: "Fullstack",
      quantidade: "2 Cursos",
      backgroundColor: "#FFF0F0"
    },
  ]


  return (
    <section className='categorias-container'>
      <h2>Categorias de cursos</h2>

      <div className='categorias'>
        {categorias.map((categoria, index) => (
          <div
            key={index}
            className="categoria"
            style={{ backgroundColor: categoria.backgroundColor }}
          >
            <div className="categoria-content">
              <img src={categoria.icon} alt={`Ícone de ${categoria.titulo}`} />
              <div className='informacoes'>
                <h3 className='categoria-titulo'>{categoria.titulo}</h3>
                <p className='categoria-cursos'>{categoria.quantidade}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}