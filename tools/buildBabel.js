import {transform} from 'babel-core'
import fs from 'fs'
import path from 'path'
import outputFileSync from 'output-file-sync'
import fse from 'fs-extra'

function buildContent(content, filename, destination, babelOptions = {}) {
  babelOptions.filename = filename
  const result = transform(content, babelOptions)
  outputFileSync(destination, result.code, {encoding: 'utf8'})
}

function buildFile(filename, destination, babelOptions = {}) {
  const content = fs.readFileSync(filename, {encoding: 'utf8'})
  // We only have .js files that we need to build
  if (path.extname(filename) === '.js') {
    const outputPath = path.join(destination, path.basename(filename))
    // console.log('%s => %s', filename, outputPath);
    buildContent(content, filename, outputPath, babelOptions)

  } else if (path.extname(filename) === '.ts' || path.extname(filename) === '.tsx' || path.extname(filename) === '.jsx') {

  } else {
    let fileShortName = filename.substring(filename.lastIndexOf('\\'))
    fse.copy(filename, destination + fileShortName, {}, err => {
      if (err) {
        console.log(err)
      }
    })
  }
}

function copyFile(filename, destination) {
  let fileShortName = filename.substring(filename.lastIndexOf('\\'))
  fse.copy(filename, destination + fileShortName, {}, err => {
    if (err) {
      console.log(err)
    }
  })
}

export default function buildBabel(folderPath, destination, babelOptions = {}, firstFolder = true) {
  let stats = fs.statSync(folderPath)

  if (stats.isFile()) {
    // buildFile(folderPath, destination, babelOptions)
    copyFile(folderPath, destination)
  } else if (stats.isDirectory()) {
    let outputPath = firstFolder ? destination : path.join(destination, path.basename(folderPath))
    let files = fs.readdirSync(folderPath).map(file => path.join(folderPath, file))
    files.forEach(filename => buildBabel(filename, outputPath, babelOptions, false))
  }
}
