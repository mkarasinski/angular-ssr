import { Component, inject, input } from '@angular/core';
import { Stations } from '../../services/stations';

@Component({
  selector: 'app-station-detail',
  imports: [],
  templateUrl: './station-detail.html',
  styleUrl: './station-detail.css',
})
export class StationDetail {
  readonly slug = input.required<string>();
  protected readonly station = inject(Stations).bySlug(this.slug);
}
