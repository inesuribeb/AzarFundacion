import './Footer.css';

function Footer() {
    return (
        <div className='footer-content'>
            <div className='footer-anagram'>
                <img src="/Images/Logo/LogoSinBordes.jpg" alt="" />
            </div>
            <div className='footer-info'>
                <div className='footer-info-column'>
                    <h3>Fundacion Azar</h3>
                    <p>Fundación Azar</p>
                    <p>Residencias</p>
                    <p>Actividades</p>
                    <p>Tienda</p>
                </div>
                <div className='footer-info-column'>
                    <h3>Contacto</h3>
                    <p>Email</p>
                </div>
                <div className='footer-info-column'>
                    <h3>Síguenos</h3>
                    <p>Instagram</p>
                    <p>Tik Tok</p>
                    <p>Linkedin</p>
                </div>
                <div className='footer-info-column'>
                    <h3>Idiomas</h3>
                    <p>Español</p>
                    <p>Inglés</p>
                    <p>Portugués</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;