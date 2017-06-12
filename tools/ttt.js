/**
 * Created by jiangyukun on 2017/6/12.
 */
import path from 'path'

const buttonPath = path.join(__dirname, '../src/button/Button.tsx')

let spawn = require('child_process').spawn
spawn('tsc', [buttonPath], {encoding: 'utf-8'})
