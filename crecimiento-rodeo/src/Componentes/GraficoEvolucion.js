import React, { useState, useEffect } from 'react';
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
            label: "Est.1",
            data: vacasTotales1,
            borderColor: "darkred",
        },
        {
            label: "Est.2",
            data: vacasTotales2,
            borderColor: "darkblue",
        },
        {
            label: "Est.3",
            data: vacasTotales3,
            borderColor: "darkgreen",
        }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div className="seccion" style={{ position: "relative", height: "28vh" }}>
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default GraficoEvolucion;