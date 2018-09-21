import express from 'express'
import React from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import Routes from '../Routes'

const app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
    const content = renderToString((
        <StaticRouter location={req.path} context={{}}>{Routes}</StaticRouter>
    ))
    res.send(
        `<html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id='root'>${content}</div>
            </body>
            <script src='./index.js'></script>
        </html>`
    )
})

var server = app.listen(3000)