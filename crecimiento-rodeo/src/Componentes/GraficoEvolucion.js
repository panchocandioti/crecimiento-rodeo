import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function GraficoEvolucion(props) {

    const [vacasTotales1, setVacasTotales1] = useState([]);
    const [vacasTotales2, setVacasTotales2] = useState([]);
    const [vacasTotales3, setVacasTotales3] = useState([]);

    let ref = useRef(null);

    useEffect(() => {
        setVacasTotales1((prevState) => props.linea1);
    }, [props.linea1]);

    useEffect(() => {
        setVacasTotales2((prevState) => props.linea2);
    }, [props.linea2]);

    useEffect(() => {
        setVacasTotales3((prevState) => props.linea3);
    }, [props.linea3]);

    const data = {
        labels: ["Año 0", "Año 1", "Año 2", "Año 3", "Año 4", "Año 5"],
        datasets: [{
            label: "Vacas E1",
            data: vacasTotales1,
            borderColor: "darkred",
        },
        {
            label: "Vacas E2",
            data: vacasTotales2,
            borderColor: "darkblue",
        },
        {
            label: "Vacas E3",
            data: vacasTotales3,
            borderColor: "darkgreen",
        }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    const descargaGrafico = useCallback(() => {
        const link = document.createElement("a");
        link.download = "GraficoEvolucion.png";
        link.href = ref.current.toBase64Image();
        link.click();
    }, []);

    return (
        <div className='grafico'>
            <div style={{ position: "relative", height: "28vh", minWidth: "60vw", backgroundColor: "white" }}>
                <Line data={data} options={options} ref={ref}></Line>
            </div>
            <button type='button' className='button' onClick={descargaGrafico}>Descargar gráfico</button>
        </div>
    )
}

export default GraficoEvolucion;