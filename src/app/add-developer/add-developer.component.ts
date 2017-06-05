import { DeveloperCollection } from './../developer/developer-collection';
import { Developer } from './../developer/developer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-addr',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloper implements OnInit {

  developer = new Developer();
  errorMessage: string;
  successMessage: string;
  submitted = false;

  technologies: string[] = [
    'JavaScript',
    'C',
    'C#',
    'Clojure'
    ];
    
  constructor(private developers: DeveloperCollection) {

  }

  addDeveloper(){

  }

  ngOnInit() {
  }

}
