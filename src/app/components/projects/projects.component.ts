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
      src: './assets/projects/DevPortfolioImage.png',
      link: 'https://github.com/devsriwal/Personal-Portfolio-Website',
    },
    {
      name: 'Chandrayan 3 Moon Mission',
      description: ' Successfully conducted in-depth data analysis, identifying critical mission parameters. Developed Python scripts to clean, preprocess, and analyze large datasets from the mission. Created interactive data visualizations using PowerBI for easy comprehension and decision-making',
      technologies: ['Python', 'PowerBI', 'Excel', 'Data Visualization'],
      src: './assets/projects/Chandrayaan3.jpg',
      link: 'https://github.com/devsriwal/Chandrayan-3-Moon-Mission',
    },
    {
      name: 'Store Data Analysis Using Excel',
      description: 'Store data analysis in Excel uses tools like pivot tables and charts to assess sales and inventory, helping businesses identify trends and make informed decisions.',
      technologies: ['Excel'],
      src: './assets/projects/VrindaDataAnalysis.jpg',
      link: 'https://github.com/devsriwal/Project-on-data-analysis-using-excel',
    },
    {
      name: 'IPL Data Analysis',
      description: 'IPL data analysis using Python examines player stats and match outcomes to uncover trends and insights, benefiting teams and fans alike.',
      technologies: ['Python Programming', 'Excel'],
      src: './assets/projects/IplDataAnalysis.png',
      link: 'https://github.com/devsriwal/IPL_analysis',
    },
  ];
}
