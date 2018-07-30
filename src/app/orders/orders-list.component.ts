import { Component, OnInit } from '@angular/core';
import {LastFmService} from '../services/last-fm.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor(private lastFmService: LastFmService) { }

  ngOnInit() {
    this.lastFmService.getAlbumsByArtist('muse').subscribe(album=>{
      console.log(album)
    })
  }

}
