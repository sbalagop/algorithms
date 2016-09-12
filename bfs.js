var findNodeBFS = function(node, data) {
	'use strict';

	// Check for null
	if (!node) {
		return null;
	}

	console.log (node.data + "--");
	// check the current node
	if (node.data === data) {
		return node;
	}

	// Check the children starting from first

	if (node.children && node.children.length > 0) {
		var i;
		for (i = 0; i < node.children.length; i++) {
			findNodeBFS(node.children[i]);
		}
	}

};

var node = {
	data: "Supreme",
	children: [{
		data: "Grandpa"
	}, {
		data: "Grandma"
	}]
};

var found =  findNodeBFS(node, "Supreme");

