"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label:"Banks",
                data:[1234,4324,4443],
                backgroundColor:['#0747b6','#2265d8','#2f91fa']
            }
        ],
        labels:['Bank 1','Bank 2','Bank 3']
    }
  return  <Doughnut
   data={data} 
   options={{
    cutout:"40%", // this will define the width of bars
    plugins:{
        legend:{
            display:false // this will not show labels
        }
    }
   }}
  />
}

export default DoughnutChart
