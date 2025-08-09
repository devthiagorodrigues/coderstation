import './style.css'
import iconStar from '../../images/icon-star.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cursos() {

    const [ cursos, setCursos ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/cursos/')
        .then(response => {
            setCursos(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.error("Erro ao buscar cursos:", error);
            setLoading(false)
        })
    }, []);

    if (loading) return <p>Carregando cursos...</p>
 
    return (
        <section className="container">
            <h2>Nossos cursos</h2>
    
            <div className="cursos-container">
                {cursos.map((curso, index) => (
                <div className='curso' key={index}>
                    <img className='fundo' src={curso.image} alt="Imagem Ilustrativa"></img>
                    <div className='informacoes'>
                        <p className="tag">{curso.tag}</p>
                        <h3 className='titulo'>{curso.titulo}</h3>
                        <div className='nota'>
                            <img src={iconStar} alt="Icone de estrela"></img>
                            <p>{curso.nota}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </section>
    )
}

export default Cursos