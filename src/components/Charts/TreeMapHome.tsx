import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsTreemap from 'highcharts/modules/treemap';
import HighchartsReact from 'highcharts-react-official';
import '../styles/Charts.css'

HighchartsTreemap(Highcharts)


const data = [
  {
    name: 'Categoria 1',
    value: 10,
    colorValue: 1,
    layer:[{
        name: 'SubCat 1.1',
        value: 5,
        colorValue:2
    },
    {
        name: 'SubCat 1.2',
        value: 7,
        colorValue:2
    }
    ]
  },
  {
    name: 'Categoria 2',
    value: 20,
    colorValue: 2,
  },
  {
    name: 'Categoria 3',
    value: 15,
    colorValue: 3,
  },
  {
    name: 'Categoria 4',
    value: 5,
    colorValue: 4,
  },
  {
    name: 'Categoria 5',
    value: 30,
    colorValue: 5,
  },
];

const options: Highcharts.Options = {
    
    chart: {
      type: 'treemap'
    },
    series: [{
      type: 'treemap',
      layoutAlgorithm: 'squarified',
      data: data,
      dataLabels: {
        enabled: true,
        format: '{point.name}',

    }, 
    levels:[
        {
            level: 1,
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                style: {
                  fontWeight: 'bold'
                }
            }
        },

    ],
        
      colorByPoint: true,
      colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9'],
      },

    ]
  };


export const TreeMapHome = (props: HighchartsReact.Props) => {
    const ChartComponentRef = React.useRef<HighchartsReact.RefObject>(null);
    
    return(
        <div>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={ChartComponentRef}
            containerProps={{className: 'containerTree'}}
            {...props}
            />
        </div>
    )
}
