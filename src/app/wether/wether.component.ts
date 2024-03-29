import { Component,OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-wether',
  templateUrl: './wether.component.html',
  styleUrls: ['./wether.component.css']
})
export class WetherComponent implements OnInit {


  myWeather:any;
  temprature: number=0;
  feelsLikeTemp: number=0;
  humidity:number=0;
  pressure: number=0;
  summary: string ='';
  iconURL : string='';
  city: string ='London';
  units: string= 'metric';



  constructor(private weatherService:WeatherService){}

  ngOnInit(): void {
    this.weatherService.getweather(this.city,this.units).subscribe({

      next: (res)=>{
        console.log(res);
        this.myWeather = res;
        console.log(this.myWeather)
        this.temprature = this.myWeather.main.temp;
        this.feelsLikeTemp = this.myWeather.main.feels_like;
        this.humidity = this.myWeather.main.humidity;
        this.pressure = this.myWeather.main.pressure;
        this.summary = this.myWeather.weather[0].main;
        this.iconURL ='https://openweathermap.org/img/wn/'+ this.myWeather.weather[0].icon +'@2x.png';


      },

      error: (error) => console.log(error.message),

      complete: () => console.info('API call completed')
    });


  }


}


