import { BarChart } from '@toast-ui/react-chart';
import React from 'react'
import { useAppStore } from '../contexts/AppStoreContext';

const AggregateChart = () => {
    const {aggregate} = useAppStore()


    const data = {
        categories: aggregate.map(item => item.name),
        series: aggregate.map(item => {
            return {name: item.name, data: [item.total]}
        })
    };

    const options = {
      chart: {
        width: 'auto',
        height: 400,
        title: 'Teams vs joined members/team',
      },
     exportMenu: {
        visible: false
     },
        legend: {
            align: 'bottom'
        },
      yAxis: {
        title: 'Team',
      },
      xAxis: {
        title: 'Joined',
      },
    };

    const containerStyle = {
      width: '100%',
    };

    return (
            <BarChart className='aggregate-chart' style={containerStyle} options={options} data={data} /> 
    )
}
export default AggregateChart

