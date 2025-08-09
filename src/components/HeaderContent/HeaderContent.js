import './style.css';
import headerImage from '../../images/headerImage.png'

export default function HeaderContent() {
    return (
        <div className='header-content'>
            <div class="content">
                <h1>Domine a <span>tecnologia.</span> <br></ br> Construa o <span>futuro.</span></h1>
                <p>
                    Na CoderStation, você aprende na prática com projetos reais, mentoria de profissionais experientes e acesso às habilidades que o mercado exige.
                </p>

                <a href="#">Aprenda agora</a>
            </div>

            <img src={headerImage} alt="Imagem Ilustrativa"></img>
        </div>
    )
}
