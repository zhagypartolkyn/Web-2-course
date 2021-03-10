import { Component, OnInit } from '@angular/core';
import { ALBUMS } from '../fake-db';
import { album } from '../models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: album[]=[];
  constructor() { }
  ngOnInit(): void {
    this.albums=ALBUMS;
  }

}
