// This file isn't transpiled, so it must use CommonJS and ES5

// Register babel to transpile before our test run
require ('babel-register')();

// Disable webpack features that Mocha doesn't umderstand
require.extensions['.css'] = function(){};
