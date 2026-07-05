import { Component, inject, input, signal } from '@angular/core';
import { Project } from '../../../service/project';
import { NgOptimizedImage } from '@angular/common';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-project-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCardTitle,
    MatCardActions,
    MatButton,
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  readonly project = input.required<Project>();

  projectLink(): void {
    location.href=this.project().repoLink;
  }

}
