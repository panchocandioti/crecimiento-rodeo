import React, { useState } from 'react'
import VidaUtilVacas from './VidaUtilVacas'
import ReposicionEfectiva from './ReposicionEfectiva'
import CrecimientoRodeo from './CrecimientoRodeo'
import BotonReset from './BotonReset'
import Grafico from './Grafico'
import PruebaPush from './PruebaPush'
import { Tooltip } from 'react-tooltip'

function IngresoDatos() {

    //Datos que se ingresan
    const [intervaloEntrePartos, setIntervaloEntrePartos] = useState('');
    const [rechazoAdultas, setRechazoAdultas] = useState('');
    const [mortandadAdultas, setMortandadAdultas] = useState('');
    const [mostrarSeccion2, setMostrarSeccion2] = useState(false);
    const [mortandadTerneros, setMortandadTerneros] = useState('');
    const [mortandadRecria, setMortandadRecria] = useState('');
    const [rechazoRecria, setrechazoRecria] = useState('');
    const [prenezVaquillonas, setPrenezVaquillonas] = useState('');
    const [abortos, setAbortos] = useState('');
    const [edadPartoAnterior, setEdadPartoAnterior] = useState('');
    const [edadPartoActual, setEdadPartoActual] = useState('');
    const [hembrasPrimiparas, setHembrasPrimiparas] = useState('');
    const [hembrasMultiparas, setHembrasMultiparas] = useState('');
    const [mostrarSeccion3, setMostrarSeccion3] = useState(false);

    //Cálculos sección 1
    const bajas = (parseFloat(rechazoAdultas) + parseFloat(mortandadAdultas)).toFixed(1);
    const vidaUtil = ((100 / bajas) * (365 / parseInt(intervaloEntrePartos))).toFixed(1);

    //Cálculos sección 2
    let hembrasProporcion = 0.5;
    const vacasAdultas = 100;
    const vaqOrigen1 = vacasAdultas * (1 - bajas / 100) * hembrasProporcion * (1 - ((parseFloat(mortandadTerneros) + parseFloat(mortandadRecria) + parseFloat(rechazoRecria) + parseFloat(abortos)) / 100));
    const coefSup = (parseInt(edadPartoAnterior) - parseInt(edadPartoActual)) / 12;
    const ternerasVT = vacasAdultas * (1 - bajas / 100) * (365 / parseInt(intervaloEntrePartos)) * parseFloat(hembrasMultiparas) / 100 * (1 - ((parseFloat(mortandadTerneros) + parseFloat(abortos)) / 100));
    const ternerasVq = vaqOrigen1 * (1 - (parseFloat(mortandadRecria) + parseFloat(rechazoRecria)) / 100) * parseFloat(prenezVaquillonas) / 100 * parseFloat(hembrasPrimiparas) / 100 * (1 - ((parseFloat(mortandadTerneros) + parseFloat(abortos)) / 100))
    const ternerasTotales = ternerasVT + ternerasVq;
    hembrasProporcion = (ternerasVT + ternerasVq) / (ternerasVT / (hembrasMultiparas / 100) + ternerasVq / (hembrasPrimiparas / 100));
    const hembrasLP = ternerasTotales * parseFloat(prenezVaquillonas) / 100 * (1 - (parseFloat(mortandadRecria) + parseFloat(rechazoRecria)) / 100);
    const hembrasCP = ternerasTotales * (1 + coefSup) * parseFloat(prenezVaquillonas) / 100 * (1 - (parseFloat(mortandadRecria) + parseFloat(rechazoRecria)) / 100);
    const demandaHembras = vacasAdultas * (bajas / 100);
    const crecimientoCabezasLP = hembrasLP - demandaHembras;
    const crecimientoCabezasCP = hembrasCP - demandaHembras;
    const reposicionLP = hembrasLP / vacasAdultas * 100;
    const reposicionCP = hembrasCP / vacasAdultas * 100;
    const crecimientoLP = (crecimientoCabezasLP / vacasAdultas * 100);
    const crecimientoCP = (crecimientoCabezasCP / vacasAdultas * 100);


    //Datos para validaciones
    let formatoEnteroPositivo = /^[1-9]\d*$/;
    let formatoPorcentaje = /^(100(\.0{1,2})?|[1-9]\d?(\.\d{1,2})?|0(\.[1-9]\d?)?|0)$/;
    let validacion1 = true;
    let validacion2 = true;

    //Validación 1
    if (!formatoEnteroPositivo.test(intervaloEntrePartos) || intervaloEntrePartos < 350 ||
        intervaloEntrePartos > 700 || !formatoPorcentaje.test(bajas) || bajas > 100) {
        validacion1 = false;
    }

    //Validación 2
    if (!formatoEnteroPositivo.test(edadPartoAnterior) || edadPartoAnterior < 12 || edadPartoAnterior > 48) {
        validacion2 = false;
    }

    if (!formatoEnteroPositivo.test(edadPartoActual) || edadPartoActual < 12 || edadPartoActual > 48) {
        validacion2 = false;
    }

    if (!formatoPorcentaje.test(mortandadTerneros) || !formatoPorcentaje.test(mortandadRecria) ||
        !formatoPorcentaje.test(rechazoRecria) || !formatoPorcentaje.test(prenezVaquillonas) ||
        !formatoPorcentaje.test(abortos) || !formatoPorcentaje.test(hembrasPrimiparas) ||
        !formatoPorcentaje.test(hembrasMultiparas)) {
        validacion2 = false;
    }

    if ((parseFloat(mortandadRecria) + parseFloat(rechazoRecria) > 100)) {
        validacion2 = false;
    }

    //Sección 1
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

    //Sección 2
    const handleMortandadTernerosChange = (e) => {
        setMortandadTerneros(e.target.value);
    };

    const handleMortandadRecriaChange = (e) => {
        setMortandadRecria(e.target.value);
    };

    const handlerechazoRecriaChange = (e) => {
        setrechazoRecria(e.target.value);
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

    const handleClick2 = () => {
        if (validacion2) {
            setMostrarSeccion3(true);
        }
    };

    return (
        <div>
            <div className='seccion'>
                <h2>Cálculo de bajas anuales y vida útil de vacas adultas:</h2>
                <form>
                    <div className='seccionFormulario'>
                        <label id="ipp">Intervalo entre partos (días): </label>
                        <input type='number' value={intervaloEntrePartos} onChange={handleIEPChange} placeholder='Ingresar valor en días (350 - 700)' />
                        <Tooltip anchorSelect="#ipp" place="top">
                            <p><b>Intervalo entre partos:</b></p>
                            <p>Días entre el último parto y el anterior</p>
                            <p>Promedio para todas las vacas adultas</p>
                            <p>Puede usarse <b>Intervalo entre partos futuro:</b></p>
                            <p>Días entre último parto y fecha estimada de próximo parto</p>
                            <p>Promedio para todas las vacas preñadas</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de rechazo de adultas (%): </label>
                        <input type='number' value={rechazoAdultas} onChange={handleRechazoChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de mortandad de adultas (%): </label>
                        <input type='number' value={mortandadAdultas} onChange={handleMortandadChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                </form>
                {mostrarSeccion2 === false && (<div>
                    <button onClick={handleClick1}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion2 && (<div>
                    <VidaUtilVacas validacion1={validacion1} bajas={bajas} vidaUtil={vidaUtil} />
                </div>)}
            </div>
            {mostrarSeccion2 && (<div className='seccion'>
                <h2>Cálculo de reposición anual efectiva:</h2>
                <form>
                    <div className='seccionFormulario'>
                        <label>Tasa de mortandad de terneras (%): </label>
                        <input type='number' value={mortandadTerneros} onChange={handleMortandadTernerosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de mortandad de recría (%): </label>
                        <input type='number' value={mortandadRecria} onChange={handleMortandadRecriaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa de rechazo de recría (%): </label>
                        <input type='number' value={rechazoRecria} onChange={handlerechazoRecriaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Eficiencia de preñez de vaquillonas (%): </label>
                        <input type='number' value={prenezVaquillonas} onChange={handlePrenezVaquillonasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Tasa general de abortos (%): </label>
                        <input type='number' value={abortos} onChange={handleAbortosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Edad al primer parto año anterior (meses): </label>
                        <input type='number' value={edadPartoAnterior} onChange={handleEdadPartoAnteriorChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Edad al primer parto año actual (meses): </label>
                        <input type='number' value={edadPartoActual} onChange={handleEdadPartoActualChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Proporción crías hembras (primíparas) (%): </label>
                        <input type='number' value={hembrasPrimiparas} onChange={handleHembrasPrimiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                    <div className='seccionFormulario'>
                        <label>Proporción crías hembras (multíparas) (%): </label>
                        <input type='number' value={hembrasMultiparas} onChange={handleHembrasMultiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                    </div>
                </form>
                {mostrarSeccion3 === false && (<div>
                    <button onClick={handleClick2}>Calcular</button>
                    <BotonReset />
                </div>)}
                {mostrarSeccion3 && (<ReposicionEfectiva validacion1={validacion1} validacion2={validacion2} hembrasProporcion={hembrasProporcion} reposicionCP={reposicionCP} reposicionLP={reposicionLP} />)}
            </div>
            )}
            {mostrarSeccion3 && (<div className='seccion'>
                <h2>Resultados:</h2>
                <Grafico bajas={bajas} reposicionCP={reposicionCP} reposicionLP={reposicionLP} validacion1={validacion1} validacion2={validacion2} />
                <CrecimientoRodeo crecimientoCP={crecimientoCP} crecimientoLP={crecimientoLP} reposicionCP={reposicionCP} reposicionLP={reposicionLP} bajas={bajas} validacion1={validacion1} validacion2={validacion2} />
                <PruebaPush crecimientoCP={crecimientoCP} crecimientoLP={crecimientoLP} />
                <BotonReset />
            </div>)}
        </div>
    )
}

export default IngresoDatos;