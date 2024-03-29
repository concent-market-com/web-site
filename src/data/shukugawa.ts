import { Message } from '../app/types';
import { shukugawaPaths } from './images';
import GeneratedImages from '../assets/generated/images.json';

/**
 * 夙川本店に関するライティングです
 */
export const shukugawa = (): Message => ({
  title: `おいしいパンを日常に。`,
  lead: `
コンセントマーケットでは、素材の美味しさにこだわっています。
特にお客さまから好評なバゲット等のハード系のパンは、小麦、水、塩、酵母のシンプルな素材だけでつくっています。そして、自家製酵母で発酵に時間をかけて丁寧に味わいを引き出します。そのため、食べると口の中で小麦の香りが広がり、シンプルながらも素材の美味しさを感じることができます。
私たちの願いは、この本来の美味しさがお客さまの日常に彩りをそえ、そしてそれが当たり前になることです。ご来店を心よりお待ちしております。
      `,
  message: `
夙川駅から徒歩3分の場所にあるコンセントマーケット夙川本店は、地元の方々に愛されるパン屋です。店内には、焼きたてのパンの香りが漂い、いろいろな種類のパンを選ぶことができます。
    `,
  images: GeneratedImages.find((image) => Object.keys(image)[0] === 'shukugawaPaths')!.shukugawaPaths!,
});
