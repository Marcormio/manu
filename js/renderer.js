// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require("electron").remote; //Press esc to exit fullscreen

var cytoscape = require('cytoscape');
var dagre = require('cytoscape-dagre');

cytoscape.use( dagre ); // register extension

var cy = cytoscape({
  container: document.getElementById('cy'),


  layout: {
	name: 'dagre'
  },

  style: [
	{
	  selector: 'node',
	  style: {
		'content': 'data(id)',
		'text-opacity': 0.5,
		'text-valign': 'center',
		'text-halign': 'right',
	  }
	},

	{
	  selector: 'edge',
	  style: {
		'curve-style': 'bezier',
		'width': 4,
		'target-arrow-shape': 'triangle',
		'line-color': '#9dbaea',
		'target-arrow-color': '#9dbaea'
	  }
	}
  ],

  elements: {
	nodes: [
	  { data: { id: 'n0' } },
	  { data: { id: 'n1' } },
	  { data: { id: 'n2' } },
	  { data: { id: 'n3' } },
	  { data: { id: 'n4' } },
	  { data: { id: 'n5' } },
	  { data: { id: 'n6' } },
	  { data: { id: 'n7' } },
	  { data: { id: 'n8' } },
	  { data: { id: 'n9' } },
	  { data: { id: 'n10' } },
	  { data: { id: 'n11' } },
	  { data: { id: 'n12' } },
	  { data: { id: 'n13' } },
	  { data: { id: 'n14' } },
	  { data: { id: 'n15' } },
	  { data: { id: 'n16' } }
	],
	edges: [
	  { data: { source: 'n0', target: 'n1' } },
	  { data: { source: 'n1', target: 'n2' } },
	  { data: { source: 'n1', target: 'n3' } },
	  { data: { source: 'n4', target: 'n5' } },
	  { data: { source: 'n4', target: 'n6' } },
	  { data: { source: 'n6', target: 'n7' } },
	  { data: { source: 'n6', target: 'n8' } },
	  { data: { source: 'n8', target: 'n9' } },
	  { data: { source: 'n8', target: 'n10' } },
	  { data: { source: 'n11', target: 'n12' } },
	  { data: { source: 'n12', target: 'n13' } },
	  { data: { source: 'n13', target: 'n14' } },
	  { data: { source: 'n13', target: 'n15' } },
	]
  },
});


document.addEventListener("keydown", event => {

	switch (event.key) {
		case "Escape":
			if(remote.getCurrentWindow().isFullScreen()) {
				remote.getCurrentWindow().setFullScreen(false);
			}
			break;
	}
});

//SSH key test with psw

//search node
document.getElementById("node-search").addEventListener("click", function(){
  x = document.getElementById("search-bar").value ;
  node = cy.$id(x);
  node.select();
}); 