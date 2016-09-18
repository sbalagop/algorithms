/* global console */

var BinarySearchTree = function(comparator) {
    "use strict";

    var self = this;

    // private variable in closure
    var root = null;

    // private method
    var _createNode = function(key, value, left, right, N) {
        return {
            'key': key,
            'value': value,
            'left': left,
            'right': right,
            'N': N
        };
    };
    var _put = function(node, key, value) {

        var compare = comparator(key, node.key);

        if (compare < 0) {
            if (!node.left) {
                node.left = _createNode(key, value, null, null, 1);
            } else {
                _put(node.left, key, value);
            }
            node.N++;
        } else if (compare > 0) {
            if (!node.right) {
                node.right = _createNode(key, value, null, null, 1);
            } else {
                _put(node.right, key, value);
            }
            node.N++;
        } else {
            node.value = value;
        }
    };

    // private method
    var _printBST = function(node) {
        if (!node) {
            return;
        }
        _printBST(node.left);
        console.log(node.key + " : " + node.N);
        _printBST(node.right);
    };

    // public method
    this.put = function(key, value) {

        if (!root) {
            root = {
                'key': key,
                'value': value,
                'left': null,
                'right': null,
                'N': 1
            };
        } else {
            _put(root, key, value);
        }
    };

    this.printBST = function() {
        _printBST(root);
    };
};

var bst = new BinarySearchTree(function(key1, key2) {
    "use strict";
    return key1 === key2 ? 0 : (key1 < key2 ? -1 : 1);
});

bst.put(1, "A");
bst.put(2, "B");
bst.put(3, "C");
bst.put(4, "D");
bst.put(5, "E");


bst.printBST();

