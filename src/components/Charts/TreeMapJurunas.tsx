import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsTreemap from 'highcharts/modules/treemap';
import HighchartsReact from 'highcharts-react-official';
import '../styles/Charts.css'

HighchartsTreemap(Highcharts)


const data= [
  {
    id: 'Homicidios_root', 
    name: 'Agressões',
    value: 10,
    colorValue: 1
  },
  {
      id: 'Homicidios_Baleado',
      name: 'Agressão por disparo de arma de fogo de mão',
      value: 5,
      parent: 'Homicidios_root',
      colorValue: 1

  },

  { 
      id: 'Homicidios_esfaqueamento',
      name: 'Esfaqueamento',
      value: 5, 
      parent: 'Homicidios_root'
  },

  {
    id: 'Acidentes_root',
    name: 'Acidentes de Transporte',
    value: 20,
    colorValue: 2,
  },
  {   
      id: 'Acidentes_ColisaoCarro',
      name: 'Colisão de carro',
      value: 11,
      colorValue:2, 
      parent: 'Acidentes_root'
  },

  {
      id: 'Acidentes_Atropelamento',
      name: 'Atropelamento',
      value: 9,
      colorValue:3,
      parent: 'Acidentes_root'
  },
  
  {
    id: 'Suicidio_root',
    name: 'Auto lesionamento intencional',
    colorValue:2
  },
  {
      name: 'Overdose',
      value: 10,
      colorValue:3,
      parent: 'Suicidio_root'
  },
  {
    name: 'Enforcamento',
    value: 10,
    colorValue:3,
    parent: 'Suicidio_root',
}


];

const options: Highcharts.Options = {
  plotOptions:{
    treemap: {levelIsConstant: false}
  },

    title:{
      text: 'Categorias'
    },
    subtitle:{
      text: 'Jurunas'
    },
    chart: {
      type: 'treemap',
    },
  
    series: [{
      name: 'Jurunas',
      type: 'treemap',
      layoutAlgorithm: 'sliceAndDice',
      data: data,
      allowTraversingTree: true,
      dataLabels: {
        enabled: false,
        format: '{point.name}',
        crop: true
      },
      colorByPoint: true,
      colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9'],
      accessibility:{
        exposeAsGroupOnly: true
      },
      levels: [{
        level: 1,
        dataLabels: {
          enabled: true,
          allowOverlap: true,
          crop: true
        },
        borderWidth: 3,
        
    }, {
        level: 1,
        dataLabels: {
        }
    }]
    }]
    };


export const TreeMapJurunas = (props: HighchartsReact.Props) => {
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
