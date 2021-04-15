//. app.js
var express = require( 'express' ),
    i18n = require( 'i18n' ),
    app = express();

//. i18n
i18n.configure({
  locales: ['ja', 'en'],
  directory: __dirname + '/locales'
});
app.use( i18n.init );

app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  var hello = res.__("hello");
  var name = res.__("world");
  if( req.query.name ){
    name = req.query.name;
  }
  res.write( hello + ' ' + name );
  res.end();
});

var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
