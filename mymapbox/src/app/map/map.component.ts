import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment'
import * as mapboxgl from 'mapbox-gl'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private accessToken: string = environment.mapbox.accessToken;
  private map: mapboxgl.Map
  private style: string = 'mapbox://styles/mapbox/streets-v11';
  private zoom = 13
  private lat = 46.217250;
  private lng = 6.114000;

  constructor() { }

  ngOnInit(): void {
    this.displayMapbox()
  }

  //Display Mapbox
  displayMapbox(){
    (mapboxgl as typeof mapboxgl).accessToken = this.accessToken

    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: this.style, // stylesheet location
      center: [this.lng, this.lat], // starting position [lng, lat]
      zoom: this.zoom // starting zoom
    });
  }

}
