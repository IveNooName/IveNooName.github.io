import { Component, inject, signal } from '@angular/core';
import { ProjectStore } from '../../service/project-store';
import { Project } from '../../service/project';

@Component({
  selector: 'app-projects-page',
  imports: [],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  protected readonly projects = signal<Project[]>([]);

  store = inject(ProjectStore);

  constructor() {
    this.store.getAll().subscribe((receivedProjects) => {
      this.projects.set(receivedProjects);
    });
  }
}
