import { Component, inject } from '@angular/core';
import { Stations } from '../../services/stations';

@Component({
  selector: 'app-station-list',
  imports: [],
  templateUrl: './station-list.html',
  styleUrl: './station-list.css',
})
export class StationList {
  protected readonly stations = inject(Stations).all;
}
