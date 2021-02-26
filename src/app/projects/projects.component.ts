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



  constructor() { }

  ngOnInit(): void {
  }
  
}
