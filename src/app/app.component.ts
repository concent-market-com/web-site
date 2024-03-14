import {Component, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './helper.scss']
})
export class AppComponent {
  title = 'concent-market';
  heroImagePath = signal('/assets/images/IMG_6931.JPG');

  changeHeroImage(path: string) {
    this.heroImagePath = signal(path);
  }
}
