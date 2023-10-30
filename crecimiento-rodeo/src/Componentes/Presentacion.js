import React, { useState, useEffect } from 'react'
import IngresoDatos from './IngresoDatos';
import MiLecheria from "../Media/MiLecheria.jpg"

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
                <h2>Instrucciones:</h2>
                <div id="instrucciones">
                    <p>Durante un período de tiempo determinado (normalmente se toma un año) se considera que un rodeo lechero crece cuando el número de vacas adultas que finalizan su vida útil (abandonan el rodeo por muerte y/o por rechazo) es menor que el número de vacas nuevas (vaquillonas de reemplazo) que inician su vida productiva, verificándose que al final del período el rodeo de vacas adultas tiene más cabezas que al comienzo.</p>
                    <p>Lo anterior debería lograrse como resultado de la dinámica propia del rodeo (crecimiento genuino o crecimiento interno del rodeo) sin necesidad de recurrir a la compra de vacas y/o vaquillonas. El crecimiento genuino es una estrategia de efecto consistente, sostenido e infinito en el tiempo que depende de la buena planificación y ejecución eficiente de los manejos del rodeo.</p>
                    <p>Mediante el uso de esta aplicación web Usted podrá estimar la tasa anual de crecimiento genuino de un rodeo lechero a partir del ingreso de algunos parámetros de rodeo.</p>
                    <p>Partiendo de un rodeo base Usted podrá evaluar los impactos en el crecimiento de rodeo que produce cada parámetro. La aplicación le permitirá evaluar tres sets de parámetros (Estados) en forma comparada. Por ejemplo, situación real versus otras dos situaciones alternativas.</p>
                    <p>Los requerimientos de ingreso de parámetros están divididos en dos formularios: "Cálculo de bajas anuales y vida útil de vacas adultas" y "Cálculo de reposición anual efectiva". Debe completarse el primero para acceder al segundo. Cada uno de ellos presenta los resultados parciales al pie al finalizar el llenado.</p>
                    <p>Haciendo click sobre la etiqueta de cada parámetro a ingresar se muestra una definición simplificada o un breve mensaje de ayuda.</p>
                    <p>Resultados que se obtienen:</p>
                    <ul>
                        <li>Gráfico comparando bajas con reposición de corto y largo plazo</li>
                        <li>Relación Reemplazos / Bajas (corto y largo plazo)</li>
                        <li>Crecimiento porcentual del rodeo (corto y largo plazo)</li>
                        <li>Gráfico de evolución comparada a cinco años (para tres estados diferentes del rodeo y partiendo del número de vacas elegido por el usuario)</li>
                    </ul>
                    <p>En el gráfico de evolución comparada los tres estados toman por defecto los valores de la primera simulación finalizada. A partir de allí se pueden hacer todos los cambios que el usuario desee. Cualquier situación simulada puede guardarse en cualquiera de los estados y ver su curva de evolución en el gráfico.</p>
                    <p>Una vez guardadas las simulaciones en los tres estados el usuario podrá generar un reporte en formato PDF ingresando algunos datos adicionales incluido un email válido al que será enviado dicho reporte.</p>
                
                
                </div>
            </div>)}
            <div>
                <button onClick={manejarOnClick1}>
                    {mostrarInstrucciones === true ? "Ocultar instrucciones" : "Mostrar instrucciones"}
                </button>
                {comenzar === false && (<button onClick={manejarOnclick2}>
                    Aceptar términos y comenzar
                </button>)}
            </div>
            {comenzar && (<div>
                <IngresoDatos />
            </div>)}
        </div>
    )
}

export default Presentacion