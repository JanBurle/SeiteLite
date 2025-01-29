let terser = require('terser'),
  glob = require('glob'),
  fs = require('fs-extra')

let files = glob.sync('public/dist/**/*.js')
files.forEach((file) => {
  terser
    .minify(fs.readFileSync(file, 'utf8'))
    .then((res) => {
      if (res.error) throw res.error
      fs.writeFileSync(file, res.code, 'utf8')
    })
    .catch(() => console.error(`Error minifying ${file}:`))
})
