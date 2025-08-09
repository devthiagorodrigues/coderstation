import './style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Footer() {

    const [totalCursos, setTotalCursos] = useState(0);

    useEffect(() => {
        axios.get('https://coderstation-backend.onrender.com/cursos')
        .then(response => {
            setTotalCursos(response.data.length);
        })
        .catch(error => {
            console.error("Erro ao buscar quantidade de cursos:", error);
        });
    }, []);

    return (
        <footer className='footer-container'>
            <div className='first-footer'>
                <div className='container-1'>
                    <h3 className='titulo'>
                        Estude com a melhor escola <br />
                        de programação do Brasil.
                    </h3>
                    <ul className='botoes'>
                        <li className='fale'>
                            <a href="#" role="button" aria-label="Fale Conosco">
                                Fale Conosco
                            </a>
                        </li>
                        <li className='busque'>
                            <a href="#" role="button" aria-label="Busque Seu Curso">
                                Busque Seu Curso
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='container-2'>
                    <div className='dados'>
                        <div className="dado">
                            <p className='numero'>{totalCursos}</p>
                            <p className='referencia'>Cursos online</p>
                        </div>

                        <div className="dado">
                            <p className='numero'>53k</p>
                            <p className='referencia'>Alunos certificados</p>
                        </div>

                        <div className="dado">
                            <p className='numero'>88.7%</p>
                            <p className='referencia'>Empregabilidade</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="direitos">
                <p>© 2025 - Projeto acadêmico. Desenvolvido por <a href="https://github.com/devthiagorodrigues">Thiago Rodrigues</a> e <a href="https://github.com/GutoDevWeb">Guilherme Augusto</a>.  Todos os direitos reservados.</p>
            </div>
        </footer>

    )
}