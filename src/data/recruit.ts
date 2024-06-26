import { Recruit } from '../app/types';

/**
 * 求人に関するライティングです
 */
export const recruit = (): Recruit => ({
  message: `
当店では、「コミュニケーションするパン」というコンセプトに共感してくれる仲間を募集しています。私達は、おいしいパンをつくりだすだけでなく、想いのあるパンを通して生まれる人との出会いをコンセントのように繋げていきたいと思い、この店を立ち上げました。

パン作りに興味がある、人と話すことが好き、お客様に喜んでいただくことが好き、そんな方々と一緒に働けることを楽しみにしています。お気軽にご応募ください。
    `,
  recruit: [
    {
      type: 'パート・アルバイト',
      items: [
        { key: '職種', value: '販売スタッフ / 道路整理スタッフ' },
        { key: '勤務地', value: '夙川本店 / to table 宝塚店' },
        { key: '給与', value: '時給 1,010円〜' },
        { key: '勤務時間', value: '8:00〜19:00のうち、4～8時間程度' },
        { key: '待遇', value: '交通費支給、制服貸与' },
        { key: '応募方法', value: 'お電話または上記メールフォームからご連絡ください。' },
      ],
    },
    {
      type: '正社員',
      items: [
        { key: '職種', value: '製造正社員' },
        { key: '勤務地', value: '夙川本店 / 宝塚店 to table' },
        { key: '給与', value: '月給 215,000円から（チーフ/25万円～30万円  店長/30万円～40万円）' },
        {
          key: '休日',
          value: '月7回　定休日月曜、火曜 (月に一度、焼き菓子の製造やイベント、教室、見学会などの研修あり)',
        },
        { key: '勤務時間', value: '時間：6:00～16:30　※シフト制　※休憩あり' },
        { key: '待遇', value: '各種社会保険完備、役職手当、残業手当、交通費全額支給、制服貸与、社員割引' },
        { key: '応募方法', value: 'お電話または上記メールフォームからご連絡ください。' },
      ],
    },
  ],
});
