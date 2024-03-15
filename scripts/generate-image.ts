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
const widthSizes = [320, 1280, 1920];

const directoryPath = [srcPath, 'assets/images'].join('/');
const createdDirPath = [srcPath, 'assets/generated'].join('/');
const createdImageDirPath = [createdDirPath, 'images'].join('/');

(async () => {
  // 作成の用意
  (() => {
    if (existsSync(createdDirPath)) {
      rmdirSync(createdDirPath, { recursive: true });
    }
    mkdirSync(createdDirPath);
    mkdirSync(createdImageDirPath);
  })();

  // directoryPathにあるすべての画像をリサイズ
  await (async () => {
    const images = readdirSync(directoryPath);
    await Promise.all(
      images.map(async (image) => {
        const inputPath = [directoryPath, image].join('/');
        for (const width of widthSizes) {
          await sharp(inputPath)
            .resize({ width })
            .toFile([createdImageDirPath, width + '_' + image].join('/'));
        }
      }),
    );
  })();

  // 画像サイズの読み込み
  (() => {
    const result = Object.keys(paths).map((theme) => {
      const data = paths[theme as Path].map((path) => {
        const dimensions = sizeOf([srcPath, path].join(''));

        return Object.assign(dimensions, {
          path,
          resize: Object.assign(
            {},
            ...widthSizes.map((width) => {
              const resizedPath = [createdImageDirPath, width + '_' + path.split('/').pop()].join('/');
              const resizedDimensions = sizeOf(resizedPath);
              return Object.assign(dimensions, {
                [width]: Object.assign(resizedDimensions, {
                  path: resizedPath,
                }),
              });
            }),
          ),
        });
      });
      return {
        [theme]: data,
      };
    });

    writeFileSync([createdDirPath, 'images.json'].join('/'), JSON.stringify(result, null, '\t'));
  })();
})();
