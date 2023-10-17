import React, { useState } from 'react'
import VidaUtilVacas from './VidaUtilVacas'
import ReposicionEfectiva from './ReposicionEfectiva'
import CrecimientoRodeo from './CrecimientoRodeo'
import BotonReset from './BotonReset'

function IngresoDatos() {

    const [intervaloEntrePartos, setIntervaloEntrePartos] = useState('');
    const [rechazoAdultas, setRechazoAdultas] = useState('');
    const [mortandadAdultas, setMortandadAdultas] = useState('');
    const [mostrarSeccion2, setMostrarSeccion2] = useState(false);
    

    const handleIEPChange = (e) => {
        setIntervaloEntrePartos(e.target.value);
    };

    const handleRechazoChange = (e) => {
        setRechazoAdultas(e.target.value);
    };

    const handleMortandadChange = (e) => {
        setMortandadAdultas(e.target.value);
    };

    const handleClick1 = () => {
        setMostrarSeccion2(true);
    };

    return (
        <div>
            <div className='seccion'>
                <h2>Cálculo de bajas y vida útil de vacas adultas:</h2>
                <form>
                    <div className='seccionFormulario'>
                        <label>Intervalo entre partos (días): </label>
                        <input value={intervaloEntrePartos} onChange={handleIEPChange} placeholder='Ingresar valor en días (350 - 700)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de rechazo en adultas (%): </label>
                        <input value={rechazoAdultas} onChange={handleRechazoChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de mortandad en adultas (%): </label>
                        <input value={mortandadAdultas} onChange={handleMortandadChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                </form>
                {mostrarSeccion2 === false && (<div>
                    <button onClick={handleClick1}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion2 && (<div>
                    <VidaUtilVacas intervaloEntrePartos={intervaloEntrePartos} rechazoAdultas={rechazoAdultas} mortandadAdultas={mortandadAdultas}/>
                </div>)}
            </div>
            {mostrarSeccion2 && (<div className='seccion'>
                FORMULARIO 2
                <button>Calcular</button>
                <ReposicionEfectiva />
            </div>
            )}
            <CrecimientoRodeo />
        </div>
    )
}

export default IngresoDatos;