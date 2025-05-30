import { ChangeDetectionStrategy, Component, inject, OnInit, signal, DOCUMENT } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';
import { NgOptimizedImage } from '@angular/common';
import { ToParagraphPipe } from '../shared/to-paragraph.pipe';
import { Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { ContactModel, GeneratedImageType, IRequestRdlaboMail, Messages, Recruit } from '../../config/types';
import GeneratedImages from '../../assets/generated/images.json';
import { shukugawa } from '../../data/main/shukugawa';
import { takarazuka } from '../../data/main/takarazuka';
import { addIcons } from 'ionicons';
import {
  bagOutline,
  bookmarkOutline,
  callOutline,
  caretDownOutline,
  lockClosedOutline,
  logoFacebook,
  logoInstagram,
  mapOutline,
  timeOutline,
} from 'ionicons/icons';
import { firstValueFrom } from 'rxjs';
import { recruit } from '../../data/main/recruit';
import { contact } from '../../data/main/contact';
import { defaultContactModel } from '../../config/constant';

@Component({
  selector: 'app-main',
  imports: [FormsModule, IonIcon, NgOptimizedImage, ReactiveFormsModule, ToParagraphPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  private document = inject(DOCUMENT);
  private meta = inject(Meta);
  private http = inject(HttpClient);

  public contactModel: ContactModel = defaultContactModel();

  heroImagePath = signal<GeneratedImageType>(
    GeneratedImages.find((image) => Object.keys(image)[0] === 'heroPaths')!.heroPaths![0]!,
  );
  heroImagePaths = signal<GeneratedImageType[]>(
    GeneratedImages.find((image) => Object.keys(image)[0] === 'heroPaths')!.heroPaths!,
  );
  recruitPaths = signal<GeneratedImageType[]>(
    GeneratedImages.find((image) => Object.keys(image)[0] === 'recruitPaths')!.recruitPaths!,
  );

  messages = signal<Messages>({
    shukigawa: shukugawa(),
    takarazuka: takarazuka(),
  });
  recruit = signal<Recruit>(recruit());
  contact = signal<string[]>(contact());
  isSend = signal<boolean>(false);

  constructor() {
    addIcons({
      logoInstagram,
      logoFacebook,
      callOutline,
      timeOutline,
      lockClosedOutline,
      mapOutline,
      caretDownOutline,
      bagOutline,
      bookmarkOutline,
    });
  }

  ngOnInit() {
    this.readyPrerender({
      title: 'コンセントマーケット | 西宮市夙川・宝塚のパン屋さん',
      description: '西宮市夙川・宝塚のパン屋さん「コンセントマーケット」。' + shukugawa().title,
      image: this.heroImagePath().path,
    });

    const scorrllLinks = this.document.querySelectorAll('a[href^="#"]');
    scorrllLinks.forEach((scrollLink) => {
      scrollLink.addEventListener('click', (e) => {
        if (window === undefined) {
          return;
        }
        e.preventDefault();
        const hrefLink = scrollLink.getAttribute('href')!;
        const targetContent = this.document.getElementById(hrefLink.replace('#', ''));
        const rectTop = targetContent!.getBoundingClientRect().top;
        const positionY = window.scrollY;
        const target = rectTop + positionY;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      });
    });
  }

  async send() {
    this.isSend.set(true);
    const preMessage = this.contactModel.tel ? `電話番号： ${this.contactModel.tel}\r\n\r\n` : '';
    const result = await firstValueFrom(
      this.http.post('https://api.v5.tipsys.me/thirdparty/concent/mail', {
        from: this.contactModel.email,
        name: this.contactModel.name,
        message: preMessage + this.contactModel.message,
      } as IRequestRdlaboMail),
    )
      .then(() => true)
      .catch(() => false);

    if (result) {
      this.contactModel = defaultContactModel();
    } else {
      this.isSend.set(false);
      alert('メッセージの送信に失敗しました。時間を置いてから再度お試しください。');
    }
  }

  changeHeroImage(image: GeneratedImageType) {
    this.heroImagePath.set(image);
  }

  readyPrerender(meta: { title: string; description: string; image?: string }): void {
    const domain: string = 'https://concent-market.com';
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
        content: domain + meta.image || domain + '/assets/icon.png',
      },
      {
        property: 'og:image',
        content: domain + meta.image || domain + '/assets/icon.png',
      },
    ]);
  }
}
