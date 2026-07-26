import { Component, inject, signal } from '@angular/core';
import { ChartComponent } from './chart-component/chart-component';
import { LanguageStore } from '../../service/language-store';
import { Language } from '../../service/language';
import { MatDivider } from '@angular/material/list';

@Component({
  selector: 'app-chart-page',
  imports: [ChartComponent, MatDivider],
  templateUrl: './chart-page.html',
  styleUrl: './chart-page.scss',
})
export class ChartPage {
  protected readonly languages = signal<Language[]>([]);
  store = inject(LanguageStore);

  constructor() {
    this.store.getAll().subscribe((receivedLanguages) => {
      this.languages.set(receivedLanguages);
    });
  }
}
