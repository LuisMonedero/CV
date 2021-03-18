import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public slides = [
    {'image': 'https://user-images.githubusercontent.com/67056781/97783623-5ed69700-1b99-11eb-8e3b-5bfefbd38f27.jpg'}, 
    {'image': 'https://user-images.githubusercontent.com/67056781/97783626-6007c400-1b99-11eb-9608-8158913d5862.jpg'}, 
    {'image': 'https://user-images.githubusercontent.com/67056781/97783625-5f6f2d80-1b99-11eb-9f45-bde19296e8a1.jpg'}
  ];
  public slides2 = [
    {'image': 'https://user-images.githubusercontent.com/67056781/111623908-4afb9c80-87eb-11eb-9c4d-d18589997916.PNG'}, 
    {'image': 'https://user-images.githubusercontent.com/67056781/111623912-4b943300-87eb-11eb-87a1-93752cb587c1.PNG'}, 
    {'image': 'https://user-images.githubusercontent.com/67056781/111623915-4b943300-87eb-11eb-89f7-fd78fc0a61a5.PNG'}
  ];



  constructor() { }

  ngOnInit(): void {
  }
  
}
