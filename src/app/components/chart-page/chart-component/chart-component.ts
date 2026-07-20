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
  totalLines = 10;

  languages = input.required<Language[]>();
  numbersForStat: number[] | undefined;

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
    this.numbersForStat = new Array<number>(this.totalLines + 1);
    this.numbersForStat[0] = 0
    for (let i = 1; i <= this.totalLines; i++) {
      this.numbersForStat[i] = i * 10
    }
  }
}
