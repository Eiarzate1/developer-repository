import { DeveloperCollection } from './../developer/developer-collection';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class Home implements OnInit {

  constructor(private developers: DeveloperCollection) { }

  getDevelopers(){
    return this.developers.getAll();
  }

  ngOnInit() {
  }

}