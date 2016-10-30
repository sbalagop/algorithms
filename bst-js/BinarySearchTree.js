/* global console */

var BinarySearchTree = function(comparator) {
    "use strict";

    // private variable in closure, not accessible to public
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

    var _get = function(node, key) {
        if (node === null) {
            return null;
        }

        var compare = comparator(key, node.key);
        if (compare < 0) {
            return _get(node.left, key);
        } else if (compare > 0) {
            return _get(node.right, key);
        } else {
            return node.value;
        }
    };

    // private method
    var _put = function(node, key, value) {

        if (!node) {
            return _createNode(key, value, null, null, 1);
        }

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
        return node;
    };

    var _visit = function(node) {
        console.log(node.key);

        // print with size for debugging
        // console.log(node.key + " (size:  " + node.N + " )");
    };

    // private method
    var _inorder = function(node) {
        if (node) {
            _inorder(node.left);
            _visit(node);
            _inorder(node.right);
        }
    };

    // private method
    var _preorder = function(node) {
        if (node) {
            _visit(node);
            _preorder(node.left);
            _preorder(node.right);
        }
    };

    // private method
    var _postorder = function(node) {
        if (node) {
            _postorder(node.left);
            _postorder(node.right);
            _visit(node);

        }
    };

    // public methods
    this.get = function(key) {
        return _get()
    };
    this.put = function(key, value) {
        root = _put(root, key, value);
    };

    this.inorder = function() {
        console.log("*** in-order ***");        
        _inorder(root);
    };

    this.preorder = function() {
        console.log("*** pre-order ***");        
        _preorder(root);
    };

    this.postorder = function() {
        console.log("*** post-order ***");        
        _postorder(root);
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


bst.inorder();
bst.preorder();
bst.postorder();

console.log("Finding value of 3 : " + )

