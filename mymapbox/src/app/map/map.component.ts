import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment'

/*IMPORT FOR MAPBOX*/
import * as mapboxgl from 'mapbox-gl'
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})


export class MapComponent {

  private accessToken: string = environment.mapbox.accessToken;
  private map: mapboxgl.Map
  private style: string = 'mapbox://styles/mapbox/streets-v11';
  private zoom = 9
  private lat = 46.217250;
  private lng = 6.114000;

  constructor() { }

  ngOnInit() {
    this.displayMapbox();
    this.mapboxNavigationControl();
    this.mapboxLocateUserToMap();
    this.mapboxDrivingDirections();
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

  //Add navigation control
  mapboxNavigationControl(){
    this.map.addControl(new mapboxgl.NavigationControl());
  }

  //Add locate user to Mapbox
  mapboxLocateUserToMap(){
    this.map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    );
  } 

  //Add driving directions
  mapboxDrivingDirections(){
    this.map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        language: 'fr'
      }),
      'top-left'
    );
  }
}
