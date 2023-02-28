import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../styles/Charts.css'
const optionsJurunas: Highcharts.Options = {

    chart:{
        type: 'bar'
    },

    xAxis:{
        categories:[
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        ],
        crosshair: true
    },
    
    yAxis:{
        min: 0,
        title:{
            text: 'Número de casos'
        },
        labels:{
            overflow: 'justify'
        }
    },
    
    title: {
        text: 'Mapa de Óbitos'
    },
    subtitle:{
        text:'Jurunas'
    },
    series: [{
        name: 'Agressões',
        type: 'bar',
        data: [197, 220, 254, 185, 120]
    }, 
    {
        name: 'Lesões autoprovocadas intencionalmente',
        type: 'bar',
        data: [30, 52, 27, 45, 57]
    }, 
    {
        name: 'Acidentes de transporte',
        type: 'bar',
        data: [320, 317, 342, 170, 500]
    }],

    tooltip:{
        valueSuffix: ' casos'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 0,
        floating: true,
        borderWidth: 1,
        backgroundColor:'#FFFFFF',
        shadow: true,
        borderRadius:1
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

}


export const ChartJurunas = (props: HighchartsReact.Props) => {
    const ChartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
    
    return(
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsJurunas}
      ref={ChartComponentRef}
      containerProps={{className: 'container'}}
      {...props}
     />
     </div>
    )
}
