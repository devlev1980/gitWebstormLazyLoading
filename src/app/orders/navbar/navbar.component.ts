import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() favoriteAlbum = new EventEmitter();
  @Output() favoriteSong = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onFavoriteAlbum() {
      this.favoriteAlbum.emit();
  }
  onFavoriteSongs(){
    this.favoriteAlbum.emit();
  }

}
