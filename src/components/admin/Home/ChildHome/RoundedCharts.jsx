import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RoundedCharts = () => {
  const [series, setSeries] = useState([44, 55, 41, 17, 15]);
  const [options, setOptions] = useState({
    chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  return (
    <div className='p-3 m-4 w-[40%] shadow bg-slate-300 rounded'>
      <div id="chart ">
        <ReactApexChart options={options} series={series} type="donut" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default RoundedCharts;
