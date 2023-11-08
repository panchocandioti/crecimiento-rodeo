import React, { useState, useEffect } from 'react'
import IngresoDatos from './IngresoDatos';
import MiLecheria from "../Media/MiLecheria.jpg"
import LogoSaltoAgro from "../Media/LogoSaltoAgro.png"
import LogoML1 from "../Media/LogoML1.png"

function Presentacion() {

    const [mostrarInstrucciones, setMostrarInstrucciones] = useState(true);
    const [comenzar, setComenzar] = useState(false);

    const manejarOnClick1 = () => {
        setMostrarInstrucciones(!mostrarInstrucciones);
    }

    const manejarOnclick2 = () => {
        setComenzar(true);
    }
    return (
        <div>
            <header className="App-header">
                <img src={MiLecheria} id="MiLecheria"></img>
                <h1>CRECIMIENTO DEL RODEO LECHERO</h1>
            </header>
            {mostrarInstrucciones && (<div className="seccion">
                <h2>Introducción:</h2>
                <div id="instrucciones">
                    <p>Durante un ejercio anual un rodeo lechero crece cuando las vacas adultas que finalizan su vida útil (muerte y/o por rechazo) son menos que las vacas nuevas (vaquillonas de reemplazo) que inician su vida productiva, finalizando el período con más vacas adultas que al comienzo.
                        Esto debería lograrse como resultado de la dinámica propia del rodeo (crecimiento genuino) sin recurrir a compra de vacas y/o vaquillonas.</p>
                    <p>Mediante el uso de esta aplicación web se puede estimar la tasa anual de crecimiento genuino de un rodeo lechero ingresando ciertos parámetros.</p>
                    <p>El ingreso de parámetros está dividido en dos formularios: "Cálculo de bajas anuales y vida útil de vacas adultas" y "Cálculo de reposición anual efectiva". Debe completarse el primero para acceder al segundo.
                        Para cada parámetro puede consultarse una definición simplificada o un breve mensaje de ayuda. Los valores ingresados pueden cambiarse en cualquier momento.</p>
                    <p>Resultados que se obtienen:</p>
                    <ul>
                        <li>Gráfico comparando bajas con reposición de corto y largo plazo</li>
                        <li>Relación Reemplazos / Bajas (corto y largo plazo)</li>
                        <li>Crecimiento porcentual del rodeo (corto y largo plazo)</li>
                        <li>Gráfico de evolución comparada a cinco años (para tres estados diferentes del rodeo y partiendo del número de vacas elegido por el usuario)</li>
                    </ul>
                    <p>En este último gráfico los tres estados toman por defecto los valores de la primera simulación terminada. Luego de hacer los cambios deseados cualquier situación simulada puede guardarse en un estado y visualizar su curva de evolución.</p>
                    <p>Se podrá generar un reporte en formato PDF ingresando datos adicionales incluido un email válido al que será enviado dicho reporte.</p>
                    <p>Secuencia de trabajo sugerida:</p>
                    <ol>
                        <li>Diagnóstico (realidad actual) (Estado 1)</li>
                        <li>Detección de puntos críticos</li>
                        <li>¿Qué pasaría si...? (pruebas)</li>
                        <li>Selección de dos alternativas exitosas (Estados 2 y 3)</li>
                        <li>Emisión de reporte final</li>
                    </ol>
                    <p>Debido a la gran cantidad de variables involucradas en la selección de datos de entrada, la interpretación de resultados y las aplicaciones de esta herramienta en general, el usuario asume toda la responsabilidad por su uso.</p>

                </div>
            </div>)}
            <div>
                <button onClick={manejarOnClick1}>
                    {mostrarInstrucciones === true ? "Ocultar introducción" : "Mostrar introducción"}
                </button>
                {comenzar === false && (<button onClick={manejarOnclick2}>
                    Aceptar términos y comenzar
                </button>)}
            </div>
            {comenzar && (<div>
                <IngresoDatos />
            </div>)}
            <footer className='footer'>
                <div>
                    <p><b>Desarrollador:</b></p>
                    <p>Ing. Agr. EPL Francisco Candioti</p>
                    <p>panchocandioti@gmail.com</p>
                </div>
                <div>
                <p><b>Con el apoyo de:</b></p>
                </div>
                <div className='containerLogos'>
                    <img src={LogoSaltoAgro} className='logo'></img>
                    <img src={LogoML1} className='logo'></img>
                </div>
            </footer>
        </div>
    )
}

export default Presentacion