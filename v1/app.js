//. app.js
var express = require( 'express' ),
    app = express();

app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  var hello = "Hello";
  var name = "World";
  if( req.query.name ){
    name = req.query.name;
  }
  res.write( hello + ' ' + name );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
