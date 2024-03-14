/**
 * トップページのヒーロー画像の設定です。
 * 1つ目の画像はデフォルトで拡大して表示されます。
 */
const _heroPaths: string[] = [
  "/images/IMG_6931.JPG",
  "/images/IMG_9691.JPG",
  "/images/IMG_4521.JPG",
  "/images/IMG_4555.JPG",
];

const _recruitPaths: string[] = [
  "/images/IMG_5285.jpeg",
  "/images/IMG_1492.JPG",
  "/images/IMG_5302.jpeg",
  "/images/IMG_6929.JPG",
]


/**
 * ここからは実装用なのでさわらないでください
 */
export const heroPaths = (): string[] => _heroPaths.map(d => "/assets" + d);
export const recruitPaths = (): string[] => _recruitPaths.map(d => "/assets" + d);
