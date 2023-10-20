import React from 'react'

function VidaUtilVacas(props) {

    return (
        <div>
            {props.validacion1 === false && (<div>
                <h3 style={{color: "darkred", backgroundColor: "lightpink"}}>Revisar los valores ingresados</h3>
            </div>)}
            {props.validacion1 && (<div className='resultados'>
                <h3>BAJAS ANUALES: <span style={{ color: 'red' }}>{props.bajas}%</span></h3>
                <h3>VIDA ÚTIL MEDIA: <span style={{ color: 'red' }}>{props.vidaUtil} lactancias</span></h3>
            </div>)}
        </div>
    )
}

export default VidaUtilVacas