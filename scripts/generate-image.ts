import sharp from 'sharp';
import sizeOf from 'image-size';
import { heroPaths, recruitPaths, shukugawaPaths, takarazukaPaths } from '../src/data/images';
import { existsSync, rmdirSync, writeFileSync, mkdirSync } from 'fs';

const paths = {
  heroPaths: heroPaths(),
  recruitPaths: recruitPaths(),
  shukugawaPaths: shukugawaPaths(),
  takarazukaPaths: takarazukaPaths(),
};

type Path = keyof typeof paths;
const srcPath = './src';
const createdDirPath = './src/assets/generated';

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

if (existsSync(createdDirPath)) {
  rmdirSync(createdDirPath);
}

mkdirSync(createdDirPath);
writeFileSync([createdDirPath, 'images.json'].join('/'), JSON.stringify(result, null, '\t'));
