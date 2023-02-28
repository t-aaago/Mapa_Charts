import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../styles/Charts.css'
const optionsGuama: Highcharts.Options = {

    xAxis:{
        categories:[
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022'
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
        text:'Selecione um bairro'
    },
    series: [{
        name: 'Homicídios',
        type: 'column',
        data: [0, 0, 0, 0, 0, 0]
    }, 
    {
        name: 'Suicidio',
        type: 'column',
        data: [0, 0, 0, 0, 0, 0]
    }, 
    {
        name: 'Acidentes de transito',
        type: 'column',
        data: [0, 0, 0, 0, 0, 0]
    }]

}


export const ChartHome = (props: HighchartsReact.Props) => {
    const ChartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
    
    return(
    <div>
    <HighchartsReact
      highcharts={Highcharts}
      options={optionsGuama}
      ref={ChartComponentRef}
      containerProps={{className: 'container'}}
      {...props}
     />
     </div>
    )
}
