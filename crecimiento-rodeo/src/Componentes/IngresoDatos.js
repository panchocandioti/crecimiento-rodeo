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
    const [mortandadTerneros, setMortandadTerneros] = useState('');
    const [mortandadRecria, setMortandadRecria] = useState('');
    const [rechazoVaquillonas, setRechazoVaquillonas] = useState('');
    const [prenezVaquillonas, setPrenezVaquillonas] = useState('');
    const [abortos, setAbortos] = useState('');
    const [edadPartoAnterior, setEdadPartoAnterior] = useState('');
    const [edadPartoActual, setEdadPartoActual] = useState('');
    const [hembrasPrimiparas, setHembrasPrimiparas] = useState('');
    const [hembrasMultiparas, setHembrasMultiparas] = useState('');

    const bajas = parseFloat(rechazoAdultas) + parseFloat(mortandadAdultas);
    const vidaUtil = ((100 / bajas) * (365 / parseInt(intervaloEntrePartos))).toFixed(2);

    let formatoEnteroPositivo = /^[1-9]\d*$/;
    let formatoPorcentaje = /^(100(\.0{1,2})?|[1-9]\d?(\.\d{1,2})?|0(\.[1-9]\d?)?|0)$/;
    let validacion1 = true;

    if (!formatoEnteroPositivo.test(intervaloEntrePartos) || intervaloEntrePartos <350 || intervaloEntrePartos > 700 || !formatoPorcentaje.test(bajas) || bajas > 100) {
        validacion1 = false;
    }
    
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
        if (validacion1) {
        setMostrarSeccion2(true);
        }
    };

    const handleMortandadTernerosChange = (e) => {
        setMortandadTerneros(e.target.value);
    };

    const handleMortandadRecriaChange = (e) => {
        setMortandadRecria(e.target.value);
    };

    const handleRechazoVaquillonasChange = (e) => {
        setRechazoVaquillonas(e.target.value);
    };

    const handlePrenezVaquillonasChange = (e) => {
        setPrenezVaquillonas(e.target.value);
    };

    const handleAbortosChange = (e) => {
        setAbortos(e.target.value);
    };

    const handleEdadPartoAnteriorChange = (e) => {
        setEdadPartoAnterior(e.target.value);
    };

    const handleEdadPartoActualChange = (e) => {
        setEdadPartoActual(e.target.value);
    };

    const handleHembrasPrimiparasChange = (e) => {
        setHembrasPrimiparas(e.target.value);
    };

    const handleHembrasMultiparasChange = (e) => {
        setHembrasMultiparas(e.target.value);
    };

    return (
        <div>
            <div className='seccion'>
                <h2>Cálculo de bajas anuales y vida útil de vacas adultas:</h2>
                <form>
                    <div className='seccionFormulario'>
                        <label>Intervalo entre partos (días): </label>
                        <input value={intervaloEntrePartos} onChange={handleIEPChange} placeholder='Ingresar valor en días (350 - 700)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de rechazo de adultas (%): </label>
                        <input value={rechazoAdultas} onChange={handleRechazoChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de mortandad de adultas (%): </label>
                        <input value={mortandadAdultas} onChange={handleMortandadChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                </form>
                {mostrarSeccion2 === false && (<div>
                    <button onClick={handleClick1}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion2 && (<div>
                    <VidaUtilVacas validacion1={validacion1} bajas={bajas} vidaUtil={vidaUtil}/>
                </div>)}
            </div>
            {mostrarSeccion2 && (<div className='seccion'>
            <h2>Cálculo de reposición anual efectiva:</h2>
                <form>
                    <div className='seccionFormulario'>
                        <label>Tasa de mortandad de terneros (%): </label>
                        <input value={mortandadTerneros} onChange={handleMortandadTernerosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de mortandad de recría (%): </label>
                        <input value={mortandadRecria} onChange={handleMortandadRecriaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de rechazo de vaquillonas (%): </label>
                        <input value={rechazoVaquillonas} onChange={handleRechazoVaquillonasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Eficiencia de preñez de vaquillonas (%): </label>
                        <input value={prenezVaquillonas} onChange={handlePrenezVaquillonasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa general de abortos (%): </label>
                        <input value={abortos} onChange={handleAbortosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Edad al primer parto año anterior (meses): </label>
                        <input value={edadPartoAnterior} onChange={handleEdadPartoAnteriorChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Edad al primer parto año actual (meses): </label>
                        <input value={edadPartoActual} onChange={handleEdadPartoActualChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Proporción crías hembras (primíparas) (%): </label>
                        <input value={hembrasPrimiparas} onChange={handleHembrasPrimiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Proporción crías hembras (multíparas) (%): </label>
                        <input value={hembrasMultiparas} onChange={handleHembrasMultiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                </form>
                <button>Calcular</button>
                <ReposicionEfectiva />
            </div>
            )}
            <CrecimientoRodeo />
        </div>
    )
}

export default IngresoDatos;