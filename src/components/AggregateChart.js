import { BarChart } from '@toast-ui/react-chart';
import React from 'react'

const AggregateChart = () => {
const data = {
  categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
  series: [
    {
      name: 'Budget',
      data: [5000, 3000, 5000, 7000, 6000, 4000],
    },
    {
      name: 'Income',
      data: [8000, 1000, 7000, 2000, 5000, 3000],
    },
  ],
};

const options = {
  chart: {
    width: 'auto',
    height: 400,
    title: 'Monthly Revenue',
  },
    exportMenu: {
        visible: false
    },
  yAxis: {
    title: 'Month',
  },
  xAxis: {
    title: 'Amount',
  },
};

const containerStyle = {
  width: '100%',
};

    return (
        <div style={{width: '100%'}}>
            <BarChart style={containerStyle} options={options} data={data} /> 
        </div>
    )
}
export default AggregateChart

