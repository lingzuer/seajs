define(function(require, exports, module) {

  var test = require('test/test');

  module
      .load('./a', function(a) {
          test.assert(a.foo === 'a', 'test module.load from factory.');
          test.print('DONE', 'info');
        })
      .load('./b')
      .load('./c.js'); // load normal script file.
});
