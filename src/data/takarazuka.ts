import { Message } from '../app/types';

/**
 * 宝塚店に関するライティングです
 */
export const takarazuka = (): Message => ({
  title: `さらに「コミュニケーションするパン」`,
  lead: `
[なぜ宝塚店 to tableをつくったのかの経緯を書いてください]
      `,
  message: `
[店舗からのメッセージを書いてください]
    `,
});
