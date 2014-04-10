var pygmentize = require('pygmentize-bundled');

module.exports = function (giik) {

  giik.context = {
    time: (new Date()).toGMTString(),
    book: {
      name: 'NodeJS 初學者指南',
      description: '使用 NodeJS 0.10.x'
    }
  };

  giik.use(giik.duration());

  giik.use(giik.markdown({
    highlight: function (code, lang, callback) {
      pygmentize({ lang: lang, format: 'html' }, code, function (err, result) {
        callback(err, result.toString());
      });
    }
  }));

  giik.use(giik.jadeTemplate('./template'));
  giik.use(giik.copy('./static'));

};
