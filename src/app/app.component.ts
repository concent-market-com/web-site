import {Component, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoInstagram, logoFacebook, callOutline, timeOutline, lockClosedOutline, mapOutline, caretDownOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, IonIcon],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './helper.scss']
})
export class AppComponent {
  title = 'concent-market';
  heroImagePath = signal('/assets/images/IMG_6931.JPG');

  constructor() {
    addIcons({logoInstagram, logoFacebook, callOutline, timeOutline, lockClosedOutline, mapOutline, caretDownOutline})
  }

  changeHeroImage(path: string) {
    this.heroImagePath = signal(path);
  }
}
