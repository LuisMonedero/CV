import { Component, Input, OnInit } from '@angular/core';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  faIdCard = faIdCardAlt;
  @Input() deviceXs: boolean = false;
  constructor(){
  }
}

