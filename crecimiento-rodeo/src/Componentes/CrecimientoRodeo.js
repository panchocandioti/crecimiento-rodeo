import React from 'react';

function CrecimientoRodeo(props) {

    const relacionReemplazosBajasCP = props.reposicionCP / props.bajas;
    const relacionReemplazosBajasLP = props.reposicionCP / props.bajas;

  return (
    <div>
      {(props.validacion1 === false || props.validacion2 === false) && (<div>
        <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
      </div>)}
      {props.validacion1 === true && props.validacion2 === true && (<div className='resultados'>
        <h3>RELACIÓN REEMPLAZOS / BAJAS</h3>
        <h3>Corto plazo: <span style={{ color: 'red' }}>{(relacionReemplazosBajasCP).toFixed(1)} / 1</span></h3>
        <h3>Largo plazo: <span style={{ color: 'red' }}>{(relacionReemplazosBajasCP).toFixed(1)} / 1</span></h3>
      </div>)}
      {props.validacion1 === true && props.validacion2 === true && (<div className='resultados'>
        <h3>CRECIMIENTO DE RODEO</h3>
        <h3>Corto plazo: <span style={{ color: 'red' }}>{(props.crecimientoCP).toFixed(1)}%</span></h3>
        <h3>Largo plazo: <span style={{ color: 'red' }}>{(props.crecimientoLP).toFixed(1)}%</span></h3>
      </div>)}
    </div>
  )
}

export default CrecimientoRodeo