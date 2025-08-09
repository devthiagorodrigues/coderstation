import './style.css';
import google from '../../images/logo-empresas/google.svg'
import lenovo from '../../images/logo-empresas/lenovo.svg'
import lexmark from '../../images/logo-empresas/lexmark.svg'
import microsoft from '../../images/logo-empresas/microsoft.svg'
import netflix from '../../images/logo-empresas/netflix.svg'
import slack from '../../images/logo-empresas/slack.svg'
import youtube from '../../images/logo-empresas/youtube.svg'
import verizon from '../../images/logo-empresas/verizon.svg'

export default function Parceiras() {

    let images = [
        google, lenovo, lexmark, microsoft, netflix, verizon, slack, youtube
    ];

    return (
        <section className='parceiras-container'>
            <div className="infos">
                <h2 className='titulo'>Conheça nossas <br></br> <span>empresas parceiras</span></h2>
                <p class="text">Nossas parcerias abrem portas para os alunos entrarem <br></br> no mercado com experiência real, conexões valiosas  <br></br>  e oportunidades de crescimento.</p>
            </div>
            
            <div className="empresas">
                { images.map((empresa, index) => (
                    <div className='empresa' key={index}>
                        <img src={empresa} alt=""></img>
                    </div>
                )) }
            </div>
        </section>
    )
}
