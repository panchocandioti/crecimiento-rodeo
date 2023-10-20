import React, {useState, useEffect} from 'react'
import IngresoDatos from './IngresoDatos';

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
                <h1>CRECIMIENTO DEL RODEO LECHERO</h1>
            </header>
            {mostrarInstrucciones && (<div className="seccion">
                INSTRUCCIONES...
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