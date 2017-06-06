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
    'Clojure',
    'Python'
    ];

  constructor(private developers: DeveloperCollection) {

  }

  addDeveloper(){
    this.developer.id = this.developers.getAll().length + 1;
    if(!this.developer.popular){
      this.developer.popular = false;
    }
    this.developers.addDeveloper(this.developer);
    this.successMessage = `Developer ${this.developer.realName} was successfully added`;
    this.submitted = true;
  }

  ngOnInit() {
  }

}
