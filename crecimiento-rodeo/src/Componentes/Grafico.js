import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Grafico(props) {

    const bajas = (props.bajas);
    const reposicionCP = (props.reposicionCP).toFixed(1);
    const reposicionLP = (props.reposicionLP).toFixed(1);

    const data = {
        labels: ["Bajas (%)", "Reposición CP (%)", "Reposición LP (%)"],
        datasets: [{
            label: "",
            data: [bajas, reposicionCP, reposicionLP],
            backgroundColor: ["red", "darkblue", "blue"],
            borderColor: "black",
            borderWidth: 2,
        }]
    }

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    return (
        <div style={{ position: "relative", height: "15vh" }}>
            <Bar data={data} options={options}></Bar>
        </div>
    )
}

export default Grafico