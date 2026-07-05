import { Component } from '@angular/core';
import { ProjectsPage } from './components/projects-page/projects-page';
import { LandingPage } from './components/landing-page/landing-page';

@Component({
  selector: 'app-root',
  imports: [ProjectsPage, LandingPage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
