import { Component, inject, input } from '@angular/core';
import { Stations } from '../../services/stations';
import { ReadingsChart } from '../readings-chart/readings-chart';

@Component({
  selector: 'app-station-detail',
  imports: [ReadingsChart],
  templateUrl: './station-detail.html',
  styleUrl: './station-detail.css',
})
export class StationDetail {
  readonly slug = input.required<string>();
  protected readonly station = inject(Stations).bySlug(this.slug);
}
