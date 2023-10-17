import React from 'react'

function VidaUtilVacas(props) {

    return (
        <div>
            {props.validacion1 === false && (<div>
                <h3 style={{color: "darkred", backgroundColor: "lightpink"}}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion1 && (<div style={{backgroundColor: "lightgray"}}>
                <h3>Baja anual de vacas adultas: <span style={{ color: 'red' }}>{props.bajas}%</span></h3>
                <h3>Vida útil estimada: <span style={{ color: 'red' }}>{props.vidaUtil} lactancias</span></h3>
            </div>)}
        </div>
    )
}

export default VidaUtilVacas