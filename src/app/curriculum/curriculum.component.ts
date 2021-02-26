import { Component, OnInit } from '@angular/core';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  constructor(){
  }
  ngOnInit(): void {
  }

}
