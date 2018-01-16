import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MakerService } from '../maker.service';
import { Maker } from '../creator/marker.class';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:string;
  maker : Maker;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service : MakerService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.maker = this.service.makerDetail(+this.id);
  }

  initialize() {
  }

}
