var csv = require('csv-parser');
var fs = require('fs');

function countGroupsAndCheckGroupNumber(gruppen, separator, adresseNr, vorname, name, email, threshold) {
  var exceedThreshold = 0;
  var arrayOfStrings = gruppen.split(separator);
  for (let index = 0; index < arrayOfStrings.length; index++) {
    console.log(arrayOfStrings[index].toString())
    console.log(threshold.toString())

    if(parseInt(arrayOfStrings[index]) > parseInt(threshold)) {
      exceedThreshold = 1;
    }
  }
  return adresseNr + ';' + vorname + ';' + name + ';'  + email + ';' + gruppen + ';' + arrayOfStrings.length + ';' + exceedThreshold;
}

exports.handleFile = function (fileName, threshold) {

  var fileExists = fs.existsSync('./output.csv');
  if(fileExists) {
    fs.unlink('./output.csv', (err) => {
      if (err) throw err;
      console.log('output.csv deleted');
    });
  }

  const code = 0;

  fs.appendFile('./output.csv', 'adresseNr;vorname;name;email;gruppen;count;exceedThreshold' + '\n', function (code,err) {

    if (err) throw err;

    fs.createReadStream(fileName)
    .pipe(csv({
      raw: true,     // do not decode to utf-8 strings
      separator: ';', // specify optional cell separator
      quote: '"',     // specify optional quote character
      escape: '"',    // specify optional escape character (defaults to quote value)
      newline: '\n',  // specify a newline character
      strict: true    // require column length match headers length
    }))
    .on('data', function (data) {

      var tmpStr = countGroupsAndCheckGroupNumber(data.Gruppen.toString(), ',', data.AdresseNr, data.Vorname.toString(), data.Name.toString(), data.EMail.toString(), threshold);

      fs.appendFile('./output.csv', tmpStr + '\n', function (err) {
        if (err) throw err;
      });
      console.log(tmpStr);

    })


  })
}