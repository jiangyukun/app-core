import 'colors';
import lib from './lib/build';

export default function Build(options) {
  return Promise.all([
    lib()
  ])
  .then(() => {});
}
