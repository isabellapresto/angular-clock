import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-app-clock',
  templateUrl: './app-clock.component.html',
  styleUrls: ['./app-clock.component.css']
})
export class AppClockComponent implements OnInit {

dateTime=new Date();
constructor() {}

ngOnInit () {
  this.startClock();
}

startClock(){
  //
  interval(1).subscribe(data=>{
    this.dateTime=new Date();
  })
}

}
