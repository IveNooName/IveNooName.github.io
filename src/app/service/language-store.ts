import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Language } from './language';

@Injectable({
  providedIn: 'root',
})
export class LanguageStore {
  http = inject(HttpClient);
  apiUrl: string = '/languages.json';

  getAll(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiUrl);
  }
}
