import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajo } from './ListadoTrabajo'

export const Inicio = () => {
    return (
        <div className='home'>
            <h1>
                Hola, me llamo <strong>Jean Rondón</strong>, soy desarrollador web apasionado del <strong>FrontEnd</strong>, también amante de diseñar paginas u otras cosas y siempre que puedo intento aprender nuevas tecnologías.
            </h1>
            <h2 className='title'>
                Te ayudo a crear tus sitio web o aplicación web, tener más visibilidad y relevancia en internet. <Link to='/contacto'>Contacta conmigo</Link>
            </h2>
            <section className='last-works'>
                <h2 className='heading'>Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos de desarrollo web.</p>

                {/* <div className='works'>

                </div> */}

                <ListadoTrabajo limite='3' />

            </section>
        </div>
    )
}
