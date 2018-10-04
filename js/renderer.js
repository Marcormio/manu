// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var cytoscape = require('cytoscape');

var cy = cytoscape({
  container: document.getElementById('cy') // container to render in
});