import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js';

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          data: [300, 50, 100],
          backgroundColor: ['red', 'blue', 'yellow'],
          borderColor: ['darkred', 'darkblue', 'darkyellow'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });

    return () => myPieChart.destroy(); // 컴포넌트가 unmount될 때 차트를 정리
  }, []);

  return <canvas ref={chartRef} width="400" height="400"></canvas>;
};

export default PieChart;
