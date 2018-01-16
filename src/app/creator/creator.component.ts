import { Component, OnInit } from '@angular/core';
import { FormsModule  } from '@angular/forms';
//import maker class
import { Maker } from './marker.class';
//import maker service
import { MakerService } from '../maker.service';
//import Router service
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
  // add service to the providers array
  providers:[]
})
export class CreatorComponent implements OnInit {

// declare nameModel , inventorModel , yearModel strings to help with adding new inventions
// make maker an array to show multiple makers
  nameModel : string;
  inventorModel : string;
  yearModel : string;
  detailsModel : string;
  makers : Maker[];
  totalMakers : number;

  constructor(
      private makerService : MakerService,
      private router : Router
    ) {
      this.nameModel = '';
      this.inventorModel = '';
      this.yearModel = '';
      this.detailsModel = '';
    // consuming the service method getInventions() to fetch default inventions
    this.makers = makerService.getMakers();
    this.totalMakers = this.makers.length;
  }
  ngOnInit() {
  }

// add create maker function for adding new Makers
  createMakers(){

    this.totalMakers += 1;
    let newMaker : Maker = {
      // initialize a new marker using data coming from template [ using 2 way data binding ]
      id:this.getId(),
      name: this.nameModel ,
      inventor : this.inventorModel ,
      year : this.yearModel,
      description : this.detailsModel
    };
    this.makers.push(newMaker);
    // set the model values to '' again
    this.nameModel = this.yearModel = this.inventorModel = '';
  }

  details( id ) {
     this.router.navigate(['/details' , id ]);
  }

  getId() {
    return this.totalMakers ;
  }

}
