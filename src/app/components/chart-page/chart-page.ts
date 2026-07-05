import { Component } from '@angular/core';
import { ChartComponent } from './chart-component/chart-component';

@Component({
  selector: 'app-chart-page',
  imports: [ChartComponent],
  templateUrl: './chart-page.html',
  styleUrl: './chart-page.scss',
})
export class ChartPage {}
