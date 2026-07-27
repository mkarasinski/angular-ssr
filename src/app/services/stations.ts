import { Service, Signal } from '@angular/core';
import { Reading, Station } from '../models/station';
import { httpResource } from '@angular/common/http';

@Service()
export class Stations {
  readonly all = httpResource<Station[]>(() => '/api/stations', { defaultValue: [] });

  bySlug(slug: Signal<string>) {
    return httpResource<Station>(() => `/api/stations/${slug()}`);
  }

  readings(slug: Signal<string>) {
    return httpResource<Reading[]>(() => `/api/stations/${slug()}/readings`, { defaultValue: [] });
  }
}
