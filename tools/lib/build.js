import 'colors'
import {exec} from '../exec'
import fsp from 'fs-promise'
import {srcRoot, libRoot} from '../constants'
import buildBabel from '../buildBabel'

export default function BuildCommonJs() {
  console.log('Building: '.cyan + 'npm module'.green)

  buildBabel(srcRoot, libRoot)

}
