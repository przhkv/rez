// This script copies src/index.html into /static/index.html with simple file transformation.
/*eslint-disable no-console */
import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('static/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to static'.green);
  });
});
