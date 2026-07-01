import { Component } from '@angular/core';
import { ConfidenceScale } from './component/confidence-scale/confidence-scale';

@Component({
  selector: 'app-root',
  imports: [ConfidenceScale],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
