import { Component } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-confidence-scale',
  imports: [MatProgressBar, MatCardContent, MatCard],
  templateUrl: './confidence-scale.html',
  styleUrl: './confidence-scale.scss',
})
export class ConfidenceScale {}
