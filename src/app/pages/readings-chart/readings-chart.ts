import { Component, computed, inject, input, signal } from '@angular/core';
import { Stations } from '../../services/stations';

const SCALE_MIN = -15;
const SCALE_MAX = 30;

@Component({
  selector: 'app-readings-chart',
  templateUrl: './readings-chart.html',
})
export class ReadingsChart {
  readonly slug = input.required<string>();
  private readonly resource = inject(Stations).readings(this.slug);

  protected readonly unit = signal<'C' | 'F'>('C');

  protected readonly points = computed(() =>
    this.resource
      .value()
      .map((r, i, arr) => {
        const x = (i / (arr.length - 1)) * 100;
        const clamped = Math.min(Math.max(r.temperature, SCALE_MIN), SCALE_MAX);
        const y = 40 - ((clamped - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 34;
        return `${x},${y}`;
      })
      .join(' '),
  );

  protected readonly extremes = computed(() => {
    const temps = this.resource.value().map((r) => r.temperature);
    return temps.length ? { min: Math.min(...temps), max: Math.max(...temps) } : null;
  });

  protected format(celsius: number): string {
    return this.unit() === 'C'
      ? `${celsius.toFixed(1)} °C`
      : `${((celsius * 9) / 5 + 32).toFixed(1)} °F`;
  }

  protected toggleUnit(): void {
    this.unit.update((u) => (u === 'C' ? 'F' : 'C'));
  }
}
