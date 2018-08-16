#!/usr/bin/env node
const co = require('co');
var prompt = require('co-prompt');
var program = require('commander');
var fileHandler = require('./fileHandler');
var threshold = null;

program
  .arguments('<fileName>')
  .option('-t, --threshold <threshold>', 'threshold')
  . action(function(fileName) {
    co(function *() {
    threshold = yield prompt('threshold: ');
    fileHandler.handleFile(fileName, threshold);
    })
  })
.parse(process.argv)
.action(() => {process.exit()})