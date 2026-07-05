import { Component } from '@angular/core';
import { LandingPage } from './components/landing-page/landing-page';
import { ProjectsPage } from './components/projects-page/projects-page';

@Component({
  selector: 'app-root',
  imports: [LandingPage, ProjectsPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
