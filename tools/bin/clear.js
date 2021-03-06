
// rm all the "__build" directories generated by sbuild.

var fs = require("fs");
var path = require("path");
var util = require("./util");
var BUILD = "__build";


exports.run = function(basedir) {
  console.log('Clearing ' + path.basename(basedir) + '...');
  clear(basedir);
  console.log("Clear successfully.")
};


function clear(basedir) {
  fs.readdirSync(basedir).forEach(function(file) {
    var p = path.join(basedir, file);
    if (file == BUILD) {
      util.rmdirForce(p);
    }
    else if (file.indexOf('.') == -1) {
      if (fs.statSync(p).isDirectory()) {
        clear(p);
      }
    }
  });
}


