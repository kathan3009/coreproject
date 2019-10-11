import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');

    
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" , "Sunday"],
          datasets: [{
              fill: 'start',
              label: '',
              data: [12, 19, 3, 5, 3,9,8],
              backgroundColor: [
                  'rgba(255,255,255,1)'
            
              ],
              borderColor: [
                  'rgba(255,255,255,1)',
                //   'rgba(54, 162, 235, 1)',
                //   'rgba(255, 206, 86, 1)',
                //   'rgba(75, 192, 192, 1)',
                //   'rgba(153, 102, 255, 1)',
                //   'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
          }]
      },
      options: {
          legend: {
            display:false,
          },
       
          scales: {
              yAxes: [{
                  ticks: {
                    fontColor: 'rgba(255,255,255,1)',
                    fontSize:15,
                    stepSize:15,
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                ticks: {
                  fontColor: 'rgba(255,255,255,1)',
                  fontSize:15,
                    beginAtZero:true
                }
            }]
          }
      }

  });
  }
  

}
