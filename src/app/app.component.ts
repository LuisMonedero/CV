import { Component } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyCV';
  mediaSub:Subscription;
  deviceXs:boolean = false;
  constructor(public mediaObserver:MediaObserver){
    this.mediaSub= this.mediaObserver.media$.subscribe((result:MediaChange)=>{
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });
  }
}
