const express = require('express')
const path = require('path')
const app = express()

/**
 * Путь до загрузки
 * @type {string}
 */
const uploadPath = path.join(__dirname, 'uploads/')

/**
 * Надо реализовать загрузку файла на сервер
 * и вывести данные в консоль (название, размер)
 */
app.route('/upload').post((req, res, next) => {

})

/**
 * Serve the basic index.html with upload form
 */
app.route('/').get((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(
    '<form action="upload" method="post" enctype="multipart/form-data">'
  )
  res.write('<input type="file" name="fileToUpload"><br>')
  res.write('<input type="submit">')
  res.write("</form>")
  return res.end()
});

const port = process.env.PORT || 3200

app.listen(port, function () {
  console.log(`Listening on port ${port}`)
});
