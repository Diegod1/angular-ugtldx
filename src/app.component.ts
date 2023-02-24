import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for Chart Symbols
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data: Object[] = [
    { x: 'WW', y: 90, text: 'World Wide' },
    { x: 'IRP', y: 65, text: 'Europe' },
    { x: 'APAC', y: 63, text: 'Asia Pacific' },
    { x: 'LATAM', y: 96, text: 'Latin America' },
    { x: 'MEA', y: 50, text: 'Middle East Africa' },
  ];
  public data1: Object[] = [
    { x: 'ICV', y: 100, text: 'World Wide' },
    { x: 'IRP', y: 100, text: 'Europe' },
    { x: 'IMT', y: 100, text: 'Asia Pacific' },
    { x: 'IVP', y: 100, text: 'Latin America' },
    { x: 'CIT', y: 100, text: 'Middle East Africa' },
  ];
  public data2: Object[] = [
    { x: 'ICV', y: 99, text: 'Indice de compresion verbal' },
    { x: 'IRP', y: 94, text: 'Europe' },
    { x: 'IMT', y: 91, text: 'Asia Pacific' },
    { x: 'IVP', y: 100, text: 'Latin America' },
    { x: 'CIT', y: 95, text: 'Middle East Africa' },
  ];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    title: 'Indices compuestos',
    valueType: 'Category',
    interval: 1,
    labelIntersectAction: 'Rotate45',
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    title: 'Penetration',
    rangePadding: 'None',
    labelFormat: '{value}',
    minimum: 40,
    lineStyle: { width: 0 },
    maximum: 160,
    interval: 10,
  };
  public legend: Object = {
    visible: false,
  };
  //Initializing Marker
  public marker1: Object = {
    visible: true,
    width: 10,
    height: 10,
    shape: 'Diamond',
    dataLabel: { name: 'text' },
  };
  public marker2: Object = {
    visible: true,
    width: 10,
    height: 10,
    shape: '',
    dataLabel: { name: 'text' },
  };
  public marker3: Object = {
    visible: true,
    width: 10,
    height: 10,
    shape: 'Pentagon',
    dataLabel: { name: 'text' },
  };
  public tooltip: Object = {
    enable: true,
  };
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };

  public width: string = Browser.isDevice ? '100%' : '75%';
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(
        /-dark/i,
        'Dark'
      )
    );
  }
  // custom code end
  public title: string = 'Perfil de puntuaciones compuestas';
  constructor() {
    //code
  }
}
