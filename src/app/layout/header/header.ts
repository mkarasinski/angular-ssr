import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly links = [
    { path: '/', label: 'Start', exact: true },
    { path: '/stations', label: 'Stations', exact: false },
    { path: '/about', label: 'About', exact: false },
  ];
}
