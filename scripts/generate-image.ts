import sharp from 'sharp';
import sizeOf from 'image-size';
import { heroPaths, recruitPaths, shukugawaPaths, takarazukaPaths } from '../src/data/images';
import { existsSync, rmdirSync, writeFileSync, mkdirSync, readdirSync } from 'fs';

const paths = {
  heroPaths: heroPaths(),
  recruitPaths: recruitPaths(),
  shukugawaPaths: shukugawaPaths(),
  takarazukaPaths: takarazukaPaths(),
};

type Path = keyof typeof paths;
const srcPath = './src';
const widthSizes = [320, 640, 960, 1280, 1920];
const directoryPath = './src/assets/images';
const createdDirPath = './src/assets/generated';
const createdImageDirPath = [createdDirPath, 'images'].join('/');

// 作成の用意
(() => {
  if (existsSync(createdDirPath)) {
    rmdirSync(createdDirPath, { recursive: true });
  }
  mkdirSync(createdDirPath);
  mkdirSync(createdImageDirPath);
})();

// directoryPathにあるすべての画像をリサイズ
(() => {
  const images = readdirSync(directoryPath);
  for (const image of images) {
    const inputPath = [directoryPath, image].join('/');
    const outputPath = [createdImageDirPath, image].join('/');

    widthSizes.forEach((width) => {
      sharp(inputPath)
        .resize({ width })
        .toFile([createdImageDirPath, width + '_' + image].join('/'));
    });
  }
})();

// 画像サイズの読み込み
(() => {
  const result = Object.keys(paths).map((theme) => {
    const data = paths[theme as Path].map((path) => {
      const dimensions = sizeOf([srcPath, path].join(''));
      return Object.assign(dimensions, {
        path,
      });
    });
    return {
      [theme]: data,
    };
  });

  writeFileSync([createdDirPath, 'images.json'].join('/'), JSON.stringify(result, null, '\t'));
})();
