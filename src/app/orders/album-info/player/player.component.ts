import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @ViewChild('player') playerRef;
  player: any;
  constructor() { }

  ngOnInit() {
  }
  playerEnded() {
    // handle event
  }

}
