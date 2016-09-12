/* global console */
var findNodeBFS = function(node, data) {
	'use strict';

	var found = null;

	// Check for null
	if (!node) {
		return null;
	}

	console.log (node.data + "--");
	// check the current node
	if (node.data === data) {
		console.log("Matching...");
		found = node;
		return found;
	}

	// Check the children starting from first

	if (node.children && node.children.length > 0) {
		var i;
		for (i = 0; i < node.children.length; i++) {
			found = findNodeBFS(node.children[i], data);
			if (found) {
				break;
			}
		}
	}
	return found;
};

var node = {
	data: "GrandParent",
	children: [{
		data: "Parent1",
		children : [{data: "Child11"}, {data: "Child12"}]
	}, {
		data: "Parent2",
		children : [{data: "Child21"}, {data: "Child22"}]
	}]
};

var found =  findNodeBFS(node, "Parent2");

if (found) {
	console.log("Found :" + found.data);
} else {
	console.log("Not Found");
}

