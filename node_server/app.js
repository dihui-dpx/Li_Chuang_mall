const express = require('express')
const app = express()
const {
  server
} = require('./config')

// 解析post数据
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))

// 解析axios数据
app.use(bodyParser.json())

// 允许跨域访问
const cors = require('cors')
app.use(cors())


// 引入路由


app.listen(`${server.port}`, () => {
  console.log('The server is running!');
})