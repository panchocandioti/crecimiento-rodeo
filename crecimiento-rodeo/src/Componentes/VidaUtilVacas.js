import React from 'react'

function VidaUtilVacas(props) {

    const bajas = parseFloat(props.rechazoAdultas) + parseFloat(props.mortandadAdultas);
    const vidaUtil = ((100 / bajas) * (365 / parseInt(props.intervaloEntrePartos))).toFixed(2);

    let formatoEnteroPositivo = /^[1-9]\d*$/;
    let formatoPorcentaje = /^(100(\.0{1,2})?|[1-9]\d?(\.\d{1,2})?|0(\.[1-9]\d?)?|0)$/;
    let validacion = true;

    if (!formatoEnteroPositivo.test(props.intervaloEntrePartos) || props.intervaloEntrePartos <350 || props.intervaloEntrePartos > 700 || !formatoPorcentaje.test(bajas) || bajas > 100) {
        validacion = false;
    }

    return (
        <div>
            {validacion === false && (<div>
                <h3>Por favor, revisar los valores ingresados</h3>
            </div>)}
            {validacion && (<div>
                <h3>Baja anual de vacas adultas: <span style={{ color: 'red' }}>{bajas}%</span></h3>
                <h3>Vida útil estimada: <span style={{ color: 'red' }}>{vidaUtil} lactancias</span></h3>
            </div>)}
        </div>
    )
}

export default VidaUtilVacas