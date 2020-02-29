import { Component, OnInit } from '@angular/core';
import { Fitness } from '../model/fitness';
import { FitnessService } from '../service/fitness.service';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  fitness:Fitness[];
  errmsg:string;
  constructor(private fit:FitnessService) {

   }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.fitness=null;
    this.errmsg=null;
    
    this.fit.getAll().subscribe(
      (data) =>{this.fitness=data; },
      (err) =>{this.errmsg="server not reachable"} 
    );
    
  }

}
