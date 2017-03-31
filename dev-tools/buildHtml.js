// This script copies src/index.html into /static/index.html with simple file transformation.
/* eslint-disable no-console */
import 'colors';
import fs from 'fs';
import cheerio from 'cheerio';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    console.log(err);
    return;
  }

  const $ = cheerio.load(markup);
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('static/index.html', $.html(), 'utf8', er =>
    console.log(er || 'index.html written to static'.green)
  );
});
