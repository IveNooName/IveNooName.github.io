import { Component, computed, input } from '@angular/core';
import { Language } from '../../../service/language';

@Component({
  selector: 'app-chart-component',
  imports: [],
  templateUrl: './chart-component.html',
  styleUrl: './chart-component.scss',
})
export class ChartComponent {
  languages = input.required<Language[]>();

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

}
