import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'Personal Portfolio',
      description: 'Developed a comprehensive personal portfolio showcasing my skills, projects, and achievements. The portfolio includes project descriptions, my skiils, effectively demonstrating my expertise and unique style to potential employers and clients',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap'],
      src: './assets/projects/Screenshot (51)-1.png',
      link: 'https://github.com/devsriwal/Personal-Portfolio-Website',
    },
    {
      name: 'iParking System',
      description: ' Built an Intelligent parking system that focuses on training a virtual agent to autonomously navigate and park a car in diverse scenarios, emulating real-world challenges.  Addresses aspects such as: spatial awareness, trajectory planning, and real-time decision-making.',
      technologies: ['C#', 'Machine Learning', 'Reinforcement Learning', 'Unity Engine'],
      src: './assets/projects/Screenshot (50).png',
      link: 'https://github.com/devsriwal/Chandrayan-3-Moon-Mission',
    },
    {
      name: 'Jarvis Voice Assistant',
      description: ' processes voice input and provides output through voice and on-screen text. Voice Assistant works in three steps 1. Speech Recognition- Recognition of voice using the microphone of the device and converting it into text. 2. Speech Manipulation-Transforming text input into actionable instructions for the computer. 3. Interpreting Commands- Executing the command according to the specific function it is called for. Stops on commands like “quit”, “stop”, or “exit”.',
      technologies: ['Python', 'Speech recognition', 'NLP', 'Web Scraping'],
      src: './assets/projects/Jarvis.jpeg',
      link: 'https://github.com/devsriwal/Project-on-data-analysis-using-excel',
    },
    {
      name: 'AnantVedha Edutech App',
      description: 'The AnantVedha Edutech App is a mobile application designed to streamline administrative tasks for teachers and provide a user-friendly interface for students to access class information and resources.',
      technologies: ['Dart', 'Flutter', 'Android Studio'],
      src: './assets/projects/App.jpg',
      link: 'https://github.com/devsriwal/IPL_analysis',
    },
  ];
}
