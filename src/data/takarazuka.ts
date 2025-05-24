import { Message } from '../config/types';
import { takarazukaPaths } from './images';
import GeneratedImages from '../assets/generated/images.json';

/**
 * 宝塚店に関するライティングです
 */
export const takarazuka = (): Message => ({
  title: `出来立てパンを、その場で。`,
  lead: `
コンセントマーケット to table 宝塚店では、「日々の食卓を彩るパンと食べ方」をコンセプトにしたランチをお楽しみいただけます（予約制）。
パンのおいしさを引き出す料理として「季節の煮込みプレート」と「季節のポタージュプレート」をご用意し、焼き立てのパンと一緒に提供しています。

また、to tableの近くの宝塚市立芸術文化センターや武庫川沿いなど、ゆっくりとピクニックを楽しんでいただける場所も多く、
お友達やご家族連れの方にも幅広くご来店いただいています。
      `,
  message: `
ランチは完全予約制で、11時と13時スタートの２部制となっております。ランチでしか提供していないパンもありますので、ぜひ一度お試しいただければと思います。
ランチのご予約は、お電話または店頭にて承っております。お気軽にお問い合わせください。※メールやSNSでは受け付けておりません。ご了承ください。

もちろん、本店と同じようにテイクアウトもご利用いただけます。
    `,
  images: GeneratedImages.find((image) => Object.keys(image)[0] === 'takarazukaPaths')!.takarazukaPaths!,
});
