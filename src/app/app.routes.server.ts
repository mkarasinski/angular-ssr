import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'stations',
    renderMode: RenderMode.Server,
  },
  {
    path: 'stations/:slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.Server,
    async getPrerenderParams() {
      // prerenders details pages for known :slug values
      const { STATIONS } = await import('../server/stations.data');
      return STATIONS.map((s) => ({ slug: s.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
