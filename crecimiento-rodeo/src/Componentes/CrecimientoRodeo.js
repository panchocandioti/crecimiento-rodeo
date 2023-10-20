import React from 'react';

function CrecimientoRodeo(props) {

  return (
    <div>
      <div style={{ backgroundColor: "lightgray" }}>
        <h3>CRECIMIENTO (Corto plazo): <span style={{ color: 'red' }}>{(props.crecimientoCP).toFixed(1)}%</span></h3>
        <h3>CRECIMIENTO (Largo plazo): <span style={{ color: 'red' }}>{(props.crecimientoLP).toFixed(1)}%</span></h3>
      </div>
    </div>
  )
}

export default CrecimientoRodeo