import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexPlotOptions, ApexDataLabels, ApexYAxis, ApexFill, ChartComponent } from 'ng-apexcharts'
import { DataService } from '../data.service';



export type chartOptionsBar = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public noOfSchoolGraph: Partial<chartOptionsBar>;
  public cOs7: Partial<chartOptionsBar>;

  constructor(private dataService: DataService) { }
  ngOnInit(): void {

    this.dataService.getData().subscribe((d) => {
     let schoolSeries = d.data.noofschoolsmonth_bar.map(item => {
    console.log('item', item);
    item.series.map(s => s.name);
    item => item.series.map(s => s.value)

     });
      // let schoolSeriesName = d.data.noofschoolsmonth_bar.map(item => item.series.map(s => s.name))
      // let schoolSeriesValue = d.data.noofschoolsmonth_bar.map(item => item.series.map(s => s.value))
      let schoolLabels = d.data.noofschoolsmonth_bar.map(item => item.name)
      console.log(schoolLabels);
      
      this.noOfSchoolGraph = {
        series: schoolSeries,
        chart: {
          height: 350,
          type: "bar",
          stacked: true,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "top" // top, center, bottom
            }
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
          offsetY: -20,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },

        xaxis: {
          categories: [
            schoolLabels
          ],
          position: "top",
          labels: {
            offsetY: -18
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: true,
            offsetY: -35
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + "%";
            }
          }
        },
        title: {
          text: "Number of Schools per Month",
          floating: false,
          offsetY: 320,
          align: "center",
          style: {
            color: "#444"
          }
        }
      }
    });

  }

  //   public noOfSchoolGraph: Partial<chartOptionsBar> = {};

  //   constructor(private dataService: DataService) { }

  //   ngOnInit(): void {
  //     this.dataService.getData().subscribe((d) => {

  //       let schoolSeries = d.data.noofschoolsmonth_bar.map(item => item.series);

  //       let schoolSeriesName = d.data.noofschoolsmonth_bar.map(item => item.series.map(s => s.name))
  //       let schoolSeriesValue = d.data.noofschoolsmonth_bar.map(item => item.series.map(s=>s.value))
  //       // console.log('series', schoolSeries);
  //        console.log('series name', schoolSeriesName);
  //       console.log('series value', schoolSeriesValue);


  //       let schoolLabels = d.data.noofschoolsmonth_bar.map(item => item.name)

  //      // for (let x=0; x<schoolSeries.length; x++ ){

  //         this.noOfSchoolGraph = {
  //           series: [
  //             {
  //               name: schoolSeriesName,
  //               data: schoolSeriesValue,
  //             }
  //           ],
  //           chart: {
  //             type: "bar",
  //             height: 350
  //           },
  //           plotOptions: {
  //             bar: {
  //               horizontal: false,
  //               columnWidth: '55%',
  //             }
  //           },
  //           xaxis: {
  //             type: "category",
  //             categories: schoolSeriesName,
  //           },
  //           labels: schoolLabels,
  //           title: {
  //             text: 'Number of Schools per Month',
  //             align: 'center'
  //           }
  //         };
  //       }

  //  //   });
  //     );
  // }

}
