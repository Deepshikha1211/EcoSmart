import React from "react";
import { Bar, Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js"
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement)

const MonthlyRecycling = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Electronics",
        data: [100, 200, 150, 300, 400, 250],
        backgroundColor: "#1b4332",
      },
      {
        label: "Plastics",
        data: [150, 250, 200, 350, 450, 300],
        backgroundColor: "#2d6a4f",
      },
      {
        label: "Paper",
        data: [100, 110, 90, 110, 90, 100],
        backgroundColor: "#40916c",
        stack: "stack1",
      },
      {
        label: "Glass",
        data: [80, 90, 85, 95, 80, 85],
        backgroundColor: "#52b788",
        stack: "stack1",
      },
      {
        label: "Metals",
        data: [50, 60, 45, 55, 45, 50],
        backgroundColor: "#74c69d",
        stack: "stack1",
      },
    ],
  };

  const pieData = {
    labels: ["Plastics", "Electronics", "Paper", "Glass", "Metals"],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: ["#1b4332", "#2d6a4f", "#40916c", "#52b788", "#74c69d"],
      },
    ],
  }

  return (
    <div className="charts">
      <div class="stat-card-chart" className="chart-1">
      <div className="chart1">
        <h4>Monthly Recycling by Category</h4>
        <Bar data={barData} />
      </div>
      </div>
      <div class="stat-card-chart"  className="chart-2">
      <div className="chart2">
        <h4>Recycling Material Breakdown</h4>
        <Pie data={pieData} />
      </div>
      </div>
    </div>
  );
};

export default MonthlyRecycling;
