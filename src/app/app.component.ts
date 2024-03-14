import {Component, inject, OnInit, signal} from '@angular/core';
import {CommonModule, DOCUMENT, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoInstagram, logoFacebook, callOutline, timeOutline, lockClosedOutline, mapOutline, caretDownOutline } from 'ionicons/icons';
import {heroPaths, recruitPaths} from '../data/images';
import {ContactModel, Messages, Recruit} from './types';
import {shukugawa} from '../data/shukugawa';
import {takarazuka} from '../data/takarazuka';
import {ToParagraphPipe} from './to-paragraph.pipe';
import {recruit} from '../data/recruit';
import {Meta} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {defaultContactModel} from './constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, IonIcon, ToParagraphPipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./header.scss', './app.component.scss', './footer.scss', './helper.scss']
})
export class AppComponent implements OnInit {
  private document = inject(DOCUMENT)
  private meta = inject(Meta);
  private http = inject(HttpClient);

  public contactModel: ContactModel = defaultContactModel();

  heroImagePaths = signal<string[]>(heroPaths());
  heroImagePath = signal<string>(heroPaths()[0]);
  recruitPaths = signal<string[]>(recruitPaths());
  messages = signal<Messages>({
    shukigawa: shukugawa(),
    takarazuka: takarazuka(),
  });
  recruit = signal<Recruit>(recruit());
  isSend = signal<boolean>(false);

  constructor() {
    addIcons({logoInstagram, logoFacebook, callOutline, timeOutline, lockClosedOutline, mapOutline, caretDownOutline});
  }

  ngOnInit() {
    this.readyPrerender({
      title: 'コンセントマーケット | 西宮・夙川のパン屋さん',
      description: '西宮・夙川のパン屋さん「コンセントマーケット」。' + shukugawa().title,
      image: this.heroImagePath(),
    });

    const scorrllLinks = this.document.querySelectorAll('a[href^="#"]');
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

  async send() {
    const preMessage = this.contactModel.tel ? `電話番号： ${this.contactModel.tel}\r\n\r\n` : '';
    const result = await firstValueFrom(this.http.post('https://api.v5.tipsys.me/thirdparty/concent/mail', {
      from: this.contactModel.email,
      name: this.contactModel.name,
      message: preMessage + this.contactModel.message,
    }))
      .then(() => true)
      .catch(() => false);

    if (result) {
      this.isSend.set(true);
      this.contactModel = defaultContactModel();
    } else {
      alert('メッセージの送信に失敗しました。時間を置いてから再度お試しください。');
    }
  }

  changeHeroImage(path: string) {
    this.heroImagePath.set(path);
  }

  readyPrerender(meta: { title: string; description: string; image?: string }): void {
    const domain: string = 'https://concent-market.web.app/';
    this.meta.removeTag('name=description');
    this.meta.removeTag('name="twitter:title"');
    this.meta.removeTag('name="twitter:description"');
    this.meta.removeTag('name="twitter:image"');
    this.meta.removeTag('property="og:title"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:url"');

    this.meta.addTags([
      {
        name: 'twitter:title',
        content: meta.title,
      },
      {
        property: 'og:title',
        content: meta.title,
      },
    ]);

    this.meta.addTags([
      {
        name: 'description',
        content: meta.description.replace(/\r?\n/g, ''),
      },
      {
        name: 'og:url',
        content: domain,
      },
      {
        name: 'twitter:description',
        content: meta.description.replace(/\r?\n/g, ''),
      },
      {
        property: 'og:description',
        content: meta.description.replace(/\r?\n/g, ''),
      },
    ]);

    this.meta.addTags([
      {
        name: 'twitter:image',
        content: meta.image || domain + '/assets/icon.png',
      },
      {
        property: 'og:image',
        content: meta.image || domain + '/assets/icon.png',
      },
    ]);
  }
}
