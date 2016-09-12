/* global console */

var queue = [];

var findNodeBFS = function(node, data) {
    "use strict";

    var found = null;

    if (!node) {
        return null;
    }

    console.log(node.data + "---");
    if (node.data === data) {
        console.log(" Matching :" + node.data);
        found = node;
        return found;
    }

    if (node.children && node.children.length > 0) {
        queue = queue.concat(node.children);
    }

    while (queue.length > 0) {
        found = findNodeBFS(queue.shift(), data);
        if (found) {
            break;
        }
    }
    return found;

};

var node = {
    data: "GrandParent",
    children: [{
        data: "Parent1",
        children: [{
            data: "Child11"
        }, {
            data: "Child12"
        }]
    }, {
        data: "Parent2",
        children: [{
            data: "Child21"
        }, {
            data: "Child22"
        }]
    }]
};

var found = findNodeBFS(node, "Child22");

if (found) {
    console.log("Found :" + found.data);
} else {
    console.log("Not Found");
}