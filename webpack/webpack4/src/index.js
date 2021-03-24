import Post from "@models/Post"
import './styles/styles.css'
import './styles/less.less'
import './styles/sass.scss'
import json from './assets/code_json'
import xml from './assets/code_xml.xml'
import csv from './assets/doc_csv.csv'
import * as $ from 'jquery'
import '@/babel'

let post = new Post("Post title")
$('.code').html(post.toString())
console.log(post, json, xml, csv)