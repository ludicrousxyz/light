// TODO: properly take into account the src folder
import { existsSync } from 'fs';
import { join } from 'path';

const findGlobal = (path: string): any => {
  if (!path || path === '/') {
    return {};
  }
  const file = join(path, 'light.config.js');
  const fileTS = join(path, 'light.config.ts');
  if (existsSync(file)) {
    const conf = require(file); // eslint-disable-line
    return conf.global || {};
  }
  if (existsSync(fileTS)) {
    const conf = require(fileTS); // eslint-disable-line
    return conf.global || {};
  }
  return findGlobal(join(path, '../'));
};

export default (path?: string): any => findGlobal(path || process.cwd());
