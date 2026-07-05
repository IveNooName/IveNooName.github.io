import { Component } from '@angular/core';
import { ProjectsPage } from './components/projects-page/projects-page';

@Component({
  selector: 'app-root',
  imports: [ProjectsPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
