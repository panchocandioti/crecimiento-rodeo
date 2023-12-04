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

    const resumeninputs = [intervaloEntrePartos, rechazoAdultas, mortandadAdultas, mortandadTerneros,
        mortandadRecria, rechazoRecria, prenezVaquillonas, abortos, edadPartoAnterior,
        edadPartoActual, hembrasPrimiparas, hembrasMultiparas];

    const resumenresultados = [bajas, vidaUtil, hembrasProporcion, reposicionCP, reposicionLP,
        crecimientoCP, crecimientoLP];


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
                <h3>Cálculo de bajas anuales y vida útil de vacas adultas:</h3>
                <form>
                    <div className='seccionFormulario'>
                        <label id="ipp">Intervalo entre partos (días): </label>
                        <input type='number' value={intervaloEntrePartos} onChange={handleIEPChange} placeholder='Ingresar valor en días (350 - 700)' />
                        <Tooltip anchorSelect="#ipp" place="top">
                            <p><b>Intervalo entre partos:</b></p>
                            <p>Días entre el último parto y el anterior</p>
                            <p>- Promedio para todas las vacas adultas -</p>
                            <p>Puede usarse <b>Intervalo entre partos futuro:</b></p>
                            <p>Días entre último parto y fecha estimada de próximo parto</p>
                            <p>- Promedio para todas las vacas preñadas -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="rech">Tasa de rechazo de adultas (%): </label>
                        <input type='number' value={rechazoAdultas} onChange={handleRechazoChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#rech" place="top">
                            <p><b>Tasa de rechazo de vacas adultas (% anual):</b></p>
                            <p>Vacas vendidas / Vacas totales * 100</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="mortad">Tasa de mortandad de adultas (%): </label>
                        <input type='number' value={mortandadAdultas} onChange={handleMortandadChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#mortad" place="top">
                            <p><b>Tasa de mortandad de vacas adultas (% anual):</b></p>
                            <p>Vacas muertas / Vacas totales * 100</p>
                        </Tooltip>
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
                <h3>Cálculo de reposición anual efectiva:</h3>
                <form>
                    <div className='seccionFormulario'>
                        <label id="mortern">Tasa de mortandad de terneras (%): </label>
                        <input type='number' value={mortandadTerneros} onChange={handleMortandadTernerosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#mortern" place="top">
                            <p><b>Tasa de mortandad de terneras (% anual):</b></p>
                            <p>Terneras muertas / Terneras nacidas * 100</p>
                            <p>- Se consideran las muertes ocurridas desde</p>
                            <p>el periparto hasta el fin de la crianza (desleche) -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="mortrec">Tasa de mortandad de recría (%): </label>
                        <input type='number' value={mortandadRecria} onChange={handleMortandadRecriaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#mortrec" place="top">
                            <p><b>Tasa de mortandad de recría (% anual):</b></p>
                            <p>Hembras recría muertas / Hembras recría totales * 100</p>
                            <p>- desde la salida de la crianza hasta el ingreso a preparto -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="rechrec">Tasa de rechazo de recría (%): </label>
                        <input type='number' value={rechazoRecria} onChange={handlerechazoRecriaChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#rechrec" place="top">
                            <p><b>Tasa de rechazo de recría (% anual):</b></p>
                            <p>Hembras recría vendidas / Hembras recría totales * 100</p>
                            <p>- desde la salida de la crianza hasta el ingreso a preparto -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="efprenez">Eficiencia de preñez de vaquillonas (%): </label>
                        <input type='number' value={prenezVaquillonas} onChange={handlePrenezVaquillonasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#efprenez" place="top">
                            <p><b>Eficiencia de preñez en vaquillonas (% anual):</b></p>
                            <p>Vaquillonas preñadas / Vaquillonas liberadas a servicio * 100</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="abortos">Tasa general de abortos (%): </label>
                        <input type='number' value={abortos} onChange={handleAbortosChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#abortos" place="top">
                            <p><b>Tasa general de abortos (% anual):</b></p>
                            <p>Abortos / Preñeces confirmadas * 100</p>
                            <p>- Se refiere a la suma de los abortos:</p>
                            <p>vistos, detectados por tacto o ecografía,</p>
                            <p>vacas con confirmación de preñez que luego</p>
                            <p>no paren en la fecha prevista -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="edadant">Edad al primer parto año anterior (meses): </label>
                        <input type='number' value={edadPartoAnterior} onChange={handleEdadPartoAnteriorChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                        <Tooltip anchorSelect="#edadant" place="top">
                            <p><b>Edad al primer parto (expresada en meses):</b></p>
                            <p>Promedio para las vaquillonas del año anterior</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="edadactual">Edad al primer parto año actual (meses): </label>
                        <input type='number' value={edadPartoActual} onChange={handleEdadPartoActualChange} placeholder='Ingresar un valor en meses (12 - 48)' />
                        <Tooltip anchorSelect="#edadactual" place="top">
                            <p><b>Edad al primer parto (expresada en meses):</b></p>
                            <p>Promedio para las vaquillonas del año en curso</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="hembrasprim">Proporción crías hembras (primíparas) (%): </label>
                        <input type='number' value={hembrasPrimiparas} onChange={handleHembrasPrimiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#hembrasprim" place="top">
                            <p><b>Proporción de crías hembras (% anual):</b></p>
                            <p>Para el grupo de primíparas (vaquillonas de 1er parto)</p>
                            <p>- Puede ser mayor al 50% si se utiliza semen sexado -</p>
                        </Tooltip>
                    </div>
                    <div className='seccionFormulario'>
                        <label id="hembrasmult">Proporción crías hembras (multíparas) (%): </label>
                        <input type='number' value={hembrasMultiparas} onChange={handleHembrasMultiparasChange} placeholder='Ingresar un porcentaje (0 - 100)' />
                        <Tooltip anchorSelect="#hembrasmult" place="top">
                            <p><b>Proporción de crías hembras (% anual):</b></p>
                            <p>Para el grupo de multíparas (desde 2do parto en adelante)</p>
                            <p>- Puede ser mayor al 50% si se utiliza semen sexado -</p>
                        </Tooltip>
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
                <h3>Resultados:</h3>
                <Grafico bajas={bajas} reposicionCP={reposicionCP} reposicionLP={reposicionLP} validacion1={validacion1} validacion2={validacion2} />
                <CrecimientoRodeo crecimientoCP={crecimientoCP} crecimientoLP={crecimientoLP} reposicionCP={reposicionCP} reposicionLP={reposicionLP} bajas={bajas} validacion1={validacion1} validacion2={validacion2} />
                <PruebaPush crecimientoCP={crecimientoCP} crecimientoLP={crecimientoLP} resumeninputs={resumeninputs} resumenresultados={resumenresultados} />
                <BotonReset />
            </div>)}
        </div>
    )
}

export default IngresoDatos;