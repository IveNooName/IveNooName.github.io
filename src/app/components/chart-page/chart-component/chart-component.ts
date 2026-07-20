import { Component, computed, input } from '@angular/core';
import { Language } from '../../../service/language';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-chart-component',
  imports: [MatDivider],
  templateUrl: './chart-component.html',
  styleUrl: './chart-component.scss',
})
export class ChartComponent {
  languages = input.required<Language[]>();
  numbersForStat: number[] = [];

  chartData = computed(() => {
    const langs = this.languages();
    const combinedLines = langs.reduce((sum, l) => sum + l.totalLines, 0);

    if (combinedLines == 0) {
      return [];
    }

    return langs.map((l) => ({
      ...l,
      percent: (l.totalLines / combinedLines) * 100,
    }));
  });

  ngOnInit() {
    for (let i = 10; i > 0; i--) {
      this.numbersForStat.push(i * 10);
    }
  }
}
