import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/shreyashi-jaiswal-sj0056', '_blank');
  }

  get email(): string {
    return 'shreyashi1003@gmail.com';
  }
}
