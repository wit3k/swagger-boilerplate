var resolve = require('json-refs').resolveRefs;
var YAML = require('yaml-js');
var fs = require('fs');
var http = require('http');

var server = http.createServer(function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  try {
    var root = YAML.load(fs.readFileSync('../spec/index.yaml').toString());
    var options = {
      processContent: function (content) {
        return YAML.load(content);
      }
    };
    resolve(root, options).then(function (results) {
      response.writeHead(200, {"Content-Type": "text/plain"});
      response.end(YAML.dump(results.resolved));
    });
  } catch (e) {
    response.writeHead(500, {"Content-Type": "text/plain"});
    response.end(e + '');
  }
});

server.listen(8090);

console.log("Server running at http://127.0.0.1:8090/");
