import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../styles/Charts.css'

const optionsGeral: Highcharts.Options = {
    
    xAxis:{
        
        categories:[
        '2017',
        '2018',
        '2019',
        '2020',
        '2021'
        ],
        crosshair: true
    },
    
    yAxis:{
        min: 0,
        title:{
        text: 'Número de casos'
        }
    },
    
    title: {
        text: 'Mapa de Óbitos'
    },
    subtitle:{
        text:'Guama'
    },
    series: [{
        name: 'Agresssões',
        type: 'bar',
        data: [179, 202, 245, 158, 128]
    }, 
    {
        name: 'Lesões autoprovocadas intencionamente',
        type: 'bar',
        data: [37, 42, 57, 25, 40]
    }, 
    {
        name: 'Acidentes de transporte',
        type: 'bar',
        data: [215, 362, 247, 167, 147]
    }],
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
    tooltip:{
        valueSuffix: ' casos'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },

}


export const ChartGuama = (props: HighchartsReact.Props) => {
    const ChartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
    
    return(
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsGeral}
      ref={ChartComponentRef}
      containerProps={{className: 'container'}}
      {...props}
     />
     </div>
    )
}
