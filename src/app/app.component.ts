import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles: [`
    p {
      color:green;
    }
  `]
})
export class AppComponent {
  title = 'angular-learning-path';
  binding = "asfd";
}
