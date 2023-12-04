import React from 'react'

function Resumen(props) {

    const inputs1 = props.resumeninputs1;
    const inputs2 = props.resumeninputs2;
    const inputs3 = props.resumeninputs3;
    const resultados1 = props.resumenresultados1;
    const resultados2 = props.resumenresultados2;
    const resultados3 = props.resumenresultados3;

    return (
        <div >
            <h2>RESUMEN</h2>
            <div id="marcoresumen">
            <div className='resumencontainer'>
                <div className='resumen'>
                    <h4>INPUTS</h4>
                    <p>Interv. entre partos (meses):</p>
                    <p>Rechazo adultas (%):</p>
                    <p>Mortandad adultas (%):</p>
                    <p>Mortandad terneras (%):</p>
                    <p>Mortandad recría (%):</p>
                    <p>Rechazo recría (%):</p>
                    <p>Preñez vaquillonas (%):</p>
                    <p>Abortos (%):</p>
                    <p>Meses 1° parto año previo:</p>
                    <p>Meses 1° parto año actual:</p>
                    <p>Crías ♀ (primíparas) (%):</p>
                    <p>Crías ♀ (multíparas) (%):</p>
                    <br></br>
                    <h4>RESULTADOS</h4>
                    <p>Bajas anuales (%):</p>
                    <p>Duración vacas (lactancias):</p>
                    <p>Crías ♀ global (%):</p>
                    <p>Reposición anual CP (%):</p>
                    <p>Reposición anual LP (%):</p>
                    <p>Crecimiento rodeo CP (%):</p>
                    <p>Crecimiento rodeo LP (%):</p>
                </div>
                <div className='resumen'>
                    <h4>EST.1</h4>
                    <p>{inputs1[0]}</p>
                    <p>{inputs1[1]}</p>
                    <p>{inputs1[2]}</p>
                    <p>{inputs1[3]}</p>
                    <p>{inputs1[4]}</p>
                    <p>{inputs1[5]}</p>
                    <p>{inputs1[6]}</p>
                    <p>{inputs1[7]}</p>
                    <p>{inputs1[8]}</p>
                    <p>{inputs1[9]}</p>
                    <p>{inputs1[10]}</p>
                    <p>{inputs1[11]}</p>
                    <p>{inputs1[12]}</p>
                    <br></br>
                    <h4>EST.1</h4>
                    <p>{parseFloat(resultados1[0]).toFixed(1)}</p>
                    <p>{parseFloat(resultados1[1]).toFixed(1)}</p>
                    <p>{parseFloat(resultados1[2]*100).toFixed(1)}</p>
                    <p>{parseFloat(resultados1[3]).toFixed(1)}</p>
                    <p>{parseFloat(resultados1[4]).toFixed(1)}</p>
                    <p>{parseFloat(resultados1[5]).toFixed(1)}</p>
                    <p>{parseFloat(resultados1[6]).toFixed(1)}</p>
                </div>
                <div className='resumen'>
                    <h4>EST.2</h4>
                    <p>{inputs2[0]}</p>
                    <p>{inputs2[1]}</p>
                    <p>{inputs2[2]}</p>
                    <p>{inputs2[3]}</p>
                    <p>{inputs2[4]}</p>
                    <p>{inputs2[5]}</p>
                    <p>{inputs2[6]}</p>
                    <p>{inputs2[7]}</p>
                    <p>{inputs2[8]}</p>
                    <p>{inputs2[9]}</p>
                    <p>{inputs2[10]}</p>
                    <p>{inputs2[11]}</p>
                    <p>{inputs2[12]}</p>
                    <br></br>
                    <h4>EST.2</h4>
                    <p>{parseFloat(resultados2[0]).toFixed(1)}</p>
                    <p>{parseFloat(resultados2[1]).toFixed(1)}</p>
                    <p>{parseFloat(resultados2[2]*100).toFixed(1)}</p>
                    <p>{parseFloat(resultados2[3]).toFixed(1)}</p>
                    <p>{parseFloat(resultados2[4]).toFixed(1)}</p>
                    <p>{parseFloat(resultados2[5]).toFixed(1)}</p>
                    <p>{parseFloat(resultados2[6]).toFixed(1)}</p>
                </div>
                <div className='resumen'>
                    <h4>EST.3</h4>
                    <p>{inputs3[0]}</p>
                    <p>{inputs3[1]}</p>
                    <p>{inputs3[2]}</p>
                    <p>{inputs3[3]}</p>
                    <p>{inputs3[4]}</p>
                    <p>{inputs3[5]}</p>
                    <p>{inputs3[6]}</p>
                    <p>{inputs3[7]}</p>
                    <p>{inputs3[8]}</p>
                    <p>{inputs3[9]}</p>
                    <p>{inputs3[10]}</p>
                    <p>{inputs3[11]}</p>
                    <p>{inputs3[12]}</p>
                    <br></br>
                    <h4>EST.3</h4>
                    <p>{parseFloat(resultados3[0]).toFixed(1)}</p>
                    <p>{parseFloat(resultados3[1]).toFixed(1)}</p>
                    <p>{parseFloat(resultados3[2]*100).toFixed(1)}</p>
                    <p>{parseFloat(resultados3[3]).toFixed(1)}</p>
                    <p>{parseFloat(resultados3[4]).toFixed(1)}</p>
                    <p>{parseFloat(resultados3[5]).toFixed(1)}</p>
                    <p>{parseFloat(resultados3[6]).toFixed(1)}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Resumen