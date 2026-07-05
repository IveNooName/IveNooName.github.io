import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectStore {
  http = inject(HttpClient);
  apiUrl: string = 'https://raw.githubusercontent.com/IveNooName/IveNooName.github.io/refs/heads/main/public/projects.json';

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl)
  }


}
