/**
 * トップページのヒーロー画像の設定です。
 * 1つ目の画像はデフォルトで拡大して表示されます。
 */
const _heroPaths: string[] = [
  '/images/IMG_3919.JPG',
  '/images/IMG_9691.JPG',
  '/images/IMG_4555.JPG',
  '/images/IMG_3653.JPG',
];

/**
 * 夙川店の画像です。
 */
const _shukugawaPaths: string[] = [
  '/images/IMG_6931.JPG',
  '/images/31C8080D-48A9-44F9-88F4-2C33EFFFCEDF.jpeg',
  '/images/IMG_5302.jpeg',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
  '/images/IMG_6929.JPG',
];

/**
 * 宝塚店の画像です。
 */
const _takarazukaPaths: string[] = [
  '/images/IMG_4347.JPG',
  '/images/IMG_5093.JPG',
  '/images/IMG_4864.jpeg',
  '/images/IMG_4868.jpeg',
];

/**
 * 求人エリアの画像です。
 */
const _recruitPaths: string[] = [
  '/images/IMG_5285.jpeg',
  '/images/IMG_4378.JPG',
  '/images/IMG_1492.JPG',
  '/images/IMG_5302.jpeg',
];

/**
 * ここからは実装用なのでさわらないでください
 */
export const heroPaths = (): string[] => _heroPaths.map((d) => '/assets' + d);
export const recruitPaths = (): string[] => _recruitPaths.map((d) => '/assets' + d);
export const shukugawaPaths = (): string[] => _shukugawaPaths.map((d) => '/assets' + d);
export const takarazukaPaths = (): string[] => _takarazukaPaths.map((d) => '/assets' + d);
