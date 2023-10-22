import React, { useEffect, useState } from 'react'
import GraficoEvolucion from "./GraficoEvolucion"

function PruebaPush(props) {

    const vacasInicio = 100;

    const [valores1, setValores1] = useState([props.crecimientoCP, props.crecimientoLP]);
    const [valores2, setValores2] = useState([props.crecimientoCP, props.crecimientoLP]);
    const [valores3, setValores3] = useState([props.crecimientoCP, props.crecimientoLP]);
    const [linea1, setLinea1] = useState([]);
    const [linea2, setLinea2] = useState([]);
    const [linea3, setLinea3] = useState([]);

    const agregarValores1 = () => {
        setValores1((prevState) => [props.crecimientoCP, props.crecimientoLP])
    };

    useEffect(() => {
        setLinea1(() => [parseInt(vacasInicio),
        parseInt(vacasInicio * (1 + valores1[0] / 100)),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100)),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100) ** 2),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100) ** 3),
        parseInt(vacasInicio * (1 + valores1[0] / 100) * (1 + valores1[1] / 100) ** 4)]);
    }, [valores1]);

    const agregarValores2 = () => {
        setValores2((prevState) => [props.crecimientoCP, props.crecimientoLP])
    };

    useEffect(() => {
        setLinea2(() => [parseInt(vacasInicio),
        parseInt(vacasInicio * (1 + valores2[0] / 100)),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100)),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100) ** 2),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100) ** 3),
        parseInt(vacasInicio * (1 + valores2[0] / 100) * (1 + valores2[1] / 100) ** 4)]);
    }, [valores2]);
    
    const agregarValores3 = () => {
        setValores3((prevState) => [props.crecimientoCP, props.crecimientoLP])
    };

    useEffect(() => {
        setLinea3(() => [parseInt(vacasInicio),
        parseInt(vacasInicio * (1 + valores3[0] / 100)),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100)),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100) ** 2),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100) ** 3),
        parseInt(vacasInicio * (1 + valores3[0] / 100) * (1 + valores3[1] / 100) ** 4)]);
    }, [valores3]);

    return (
        <div className='opciones'>
            <h2>EVOLUCIÓN COMPARADA</h2>
            <div className='subseccion'>
                <button onClick={() => agregarValores1()}>Estado 1</button>
                <p>CRECIMIENTO - CP: {(valores1[0]).toFixed(1)} | LP: {(valores1[1]).toFixed(1)}</p>
            </div>
             <div className='subseccion'>
                <button onClick={() => agregarValores2()}>Estado 2</button>
                <p>CRECIMIENTO - CP: {(valores2[0]).toFixed(1)} | LP: {(valores2[1]).toFixed(1)}</p>
            </div>
            <div className='subseccion'>
                <button onClick={() => agregarValores3()}>Estado 3</button>
                <p>CRECIMIENTO - CP: {(valores3[0]).toFixed(1)} | LP: {(valores3[1]).toFixed(1)}</p>
            </div>
            <GraficoEvolucion linea1={linea1} linea2={linea2} linea3={linea3}/>
        </div>)
}

export default PruebaPush