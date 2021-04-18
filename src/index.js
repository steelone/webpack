import * as $ from 'jquery'
import Post from '@models/Post'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo.png'
import json from './assets/json.json'

import './babel.js'

const post = new Post('Webpack post title', WebpackLogo)
console.log('Post to string', post.toString());

$('pre').addClass('code').html(post.toString())

console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('csv: ', csv);