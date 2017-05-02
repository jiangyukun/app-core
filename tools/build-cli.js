/* eslint no-process-exit: 0 */

import 'colors'
import build from './build'

import yargs from 'yargs'

const argv = yargs
  .help('h')
  .option('docs-only', {
    demand: false,
    default: false
  })
  .option('verbose', {
    demand: false,
    default: false,
    describe: 'Increased debug output'
  })
  .option('dev', {
    demand: false,
    default: false,
    describe: 'Only used when supplied with the --docs-only flag'
  })
  .argv

build(argv)
