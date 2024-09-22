import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("./assets/Shreyashi_sResume.pdf");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/shreyashi-jaiswal-sj0056', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/shreyashi2928', '_blank');
  }
}
