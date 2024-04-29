import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
            <div className='redes'>
                <a href='https://www.aluracursos.com/'>
                    <img src="/img/facebook.png" alt='Facebook' />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src="/img/twitter.png" alt='twitter' />
                </a>
                <a href='https://www.aluracursos.com/'>
                    <img src="/img/instagram.png" alt='instagram' />
                </a>
            </div>
            <strong>Desarrollado por Alura</strong>
        </footer>
    )
}

export default Footer