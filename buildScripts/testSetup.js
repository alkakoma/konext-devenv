//test files isn't transpiled. Must use CommomJS and ES5

//Register babel to transpile before our tests runs
require('babel-register')();

// Disable Wzbpack features that Mocha doen't understand
require.extensions['*.css'] = function(){};
