import React from 'react'

function ReposicionEfectiva(props) {
  return (
    <div>
      {props.validacion2 === false && (<div>

        <h3 style={{ color: "darkred", backgroundColor: "lightpink" }}>Revisar los valores ingresados</h3>
      </div>)}
      {props.validacion2 && (
        <div style={{ backgroundColor: "lightgray" }}>
          <p>Proporción global de crías hembras: <span style={{ color: 'red' }}>{(props.hembrasProporcion * 100).toFixed(1)}%</span></p>
          <h3>Reposición anual (corto plazo): <span style={{ color: 'red' }}>{(props.reposicionCP).toFixed(1)}%</span></h3>
          <h3>Reposición anual (largo plazo): <span style={{ color: 'red' }}>{(props.reposicionLP).toFixed(1)}%</span></h3>
        </div>)}
    </div>
  )
}

export default ReposicionEfectiva