// Unsolved BST Questions

// Find all sequences that can create the same tree.

// Given 2 arrays, 1 for preorder traversal and 1 for inorder traversal, build a tree.

var createTreeFromStrings = function(tree) {

	var tree = new BinaryTree();

	// Pre: [A,B,D,H,I,E,J,K,C,F,G]
	// In:  [H,D,I,B,J,E,K,A,F,C,G]

	var recurse = function(preOrder, inOrder) {

		// first, find first letter of pre-order in inorder, return index.
		var firstPreOrderLetter = preOrder[0];
		// A --> 7
		var indexAtInorder = inOrder.indexOf(firstPreOrderLetter);

		// get substrings for both up to that index.
		// Pre: ABDHIEJK
		var preorderSubstr = preOrder.slice(0, indexAtInorder + 1);
		// In:  HDIBJEKA
		var inorderSubstr = inOrder.slice(0, indexAtInorder + 1);

		if (!tree.root) {

			// Set A as the local root.
			tree.add(firstPreOrderLetter);
		} else {
			tree.addLeftChild(firstPreOrderLetter);
		}

		// slice off A.
		// Pre: BDHIEJK
		preorderSubstr.splice(0, 1);
		// In:  HDIBJEK
		inorderSubstr.splice(indexAtInorder, 1);

		while (!_.isEqual(preorderSubstr, inorderSubstr) || preOrder.length !== 3) {
			recurse(preorderSubstr, inorderSubstr);
		}

		// If they're identical, then all letters must be right children of each

		if (_.isEqual(preorderSubstr, inorderSubstr)) {
			for (var i = 0; i < preorderSubstr.length; i++) {
				tree.addRightChild(preorderSubstr[i]);
			}
		}

		// If they're not identical but the length is 3, then we can finally know the order.
		// Pre: DHI
		// In:  HDI

		// append H as left child and I as right child (/bc/ both end with I).
		var baseCaseTree = inorderSubstr[1];
		baseCaseTree.addLeft(preorderSubstr[0]);
		baseCaseTree.addRight(inorderSubstr[2]);

		return baseCaseTree;

		// up the call stack, append DHI tree as left child of B.

		// UP the call stack, repeat process for the EJK/JEK (which becomes a E -- J -- K tree).

		// attach EJK as the right arm of B.

	}
};
