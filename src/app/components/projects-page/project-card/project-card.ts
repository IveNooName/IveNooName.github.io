import { Component, inject, input, signal } from '@angular/core';
import { Project } from '../../../service/project';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();
}
