import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';

import { inject } from '@angular/core';
import {
  Firestore,
  collectionData,
  collection,
  Timestamp,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  visitorId: string;
  time: Timestamp;
  urls: [];
  censored: number;
  uncensored: number;
}

type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  animations: any;
  // noData: any;
};

@Component({
  selector: 'app-dashboadbymonth',
  templateUrl: './dashboadbymonth.component.html',
  styleUrl: './dashboadbymonth.component.scss',
})
export class DashboadbymonthComponent implements OnInit {
  chart: ChartOptions = {
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    series: [],
    chart: {
      height: 600,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        if (val == 0) {
          return '';
        }
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '10px',
        colors: ['#304758'],
      },
    },

    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      position: 'bottom',

      labels: {
        offsetY: 0,
        style: {
          fontWeight: 600,
          fontSize: '13px',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
        offsetY: -35,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 100, 100],
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: any) {
          return val;
        },
      },
    },
    title: {
      text: 'Monthly Inflation in Argentina, 2002',
      floating: false,
      offsetY: 5,
      align: 'center',
      style: {
        color: '#444',
      },
    },
  };

  item$!: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  data: Item[] = [];
  fillterByMonth: any[] = [];
  month = 1;
  count = 0;
  censored = 0;
  uncensored = 0;

  ngOnInit(): void {
    const itemCollection = collection(this.firestore, 'images');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
    this.item$.subscribe((items: any) => {
      this.chart.series = [
        {
          name: 'Total',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Censored',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
        {
          name: 'Uncensored',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ];
      // console.log(items)
      items.forEach((item: any) => {
        for (let i = 1; i <= 12; i++) {
          if (item.time.toDate().getMonth() == i) {
            this.count += item.urls.length;
            this.censored += item.countCensored;
            this.uncensored += item.countUncensored;
            this.month = i;
          }
        }

        this.chart.series[0].data[this.month] = this.count;
        this.chart.series[1].data[this.month] = this.censored;
        this.chart.series[2].data[this.month] = this.uncensored;
      });

      this.count = 0;
      this.censored = 0;
      this.uncensored = 0;
    });
  }

  clickEvent() {
    this.chart.series = [
      {
        xaxis: {
          categories: [
            // 1 -> 31
            '1',
            '2',
            '3',
            '4','5','6','7','8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18','19','20','21','22','23','24','25','26','27','28','29','30','31'

          ],
        },
      },
    ];
  }

  constructor() {}
}
