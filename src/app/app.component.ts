import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule, DOCUMENT, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoInstagram, logoFacebook, callOutline, timeOutline, lockClosedOutline, mapOutline, caretDownOutline } from 'ionicons/icons';
import {heroPaths, recruitPaths} from '../data/images';
import {Message, Recruit} from '../data/types';
import {shukugawa} from '../data/shukugawa';
import {takarazuka} from '../data/takarazuka';
import {ToParagraphPipe} from './to-paragraph.pipe';
import {recruit} from '../data/recruit';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, IonIcon, ToParagraphPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./header.scss', './app.component.scss', './footer.scss', './helper.scss']
})
export class AppComponent implements OnInit {
  private document = inject(DOCUMENT)

  heroImagePaths = signal<string[]>(heroPaths());
  heroImagePath = signal<string>(heroPaths()[0]);
  recruitPaths = signal<string[]>(recruitPaths());
  messages = signal<{
    shukigawa: Message;
    takarazuka: Message;
  }>({
    shukigawa: shukugawa(),
    takarazuka: takarazuka(),
  });
  recruit = signal<Recruit>(recruit());

  constructor() {
    addIcons({logoInstagram, logoFacebook, callOutline, timeOutline, lockClosedOutline, mapOutline, caretDownOutline});
  }

  ngOnInit() {
    const scorrllLinks = document.querySelectorAll('a[href^="#"]');
    scorrllLinks.forEach((scorrllLink) => {
      scorrllLink.addEventListener("click", (e) => {
        if (window === undefined) {
          return;
        }
        e.preventDefault();
        const hrefLink = scorrllLink.getAttribute("href")!;
        const targetContent = this.document.getElementById(hrefLink.replace("#", ""));
        const rectTop = targetContent!.getBoundingClientRect().top;
        const positionY = window.scrollY;
        const target = rectTop + positionY;
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      });
    });
  }

  changeHeroImage(path: string) {
    this.heroImagePath.set(path);
  }
}
