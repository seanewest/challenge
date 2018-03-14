var docker = require('docker-browser-console')
var websocket = require('websocket-stream')

// create a stream for any docker image
// use docker({style:false}) to disable default styling
// all other options are forwarded to the term.js instance
var terminal = docker()

console.log('yo');

// connect to a docker-browser-console server
terminal.pipe(websocket('ws://159.203.66.49:8080')).pipe(terminal)

// append the terminal to a DOM element
terminal.appendTo(document.body)
