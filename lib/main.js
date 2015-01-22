// jshint unused: false

// var util = require( 'lz-node-utils' );
var settings = util.loadAppSettings();

var _ = require( 'underscore' );

console.log( [
	'define your app settings in config/default-settings.js',
	'you may override in config/settings.js',
	'current settings:',
	'================',
	JSON.stringify( settings )
].join( '\n' ) );
