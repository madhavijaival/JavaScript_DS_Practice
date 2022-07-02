//=====================05/31/2022=========================//
//1. ===========Find the closest vlaue in BST=======================//
/* function findClosestValueInBst(tree, target) {
    // Write your code here.
    return  closestNumber(tree, target, tree.value);

  }
  function closestNumber(tree, target, closest){
    if (tree === null){
      return closest;
    }
    if((Math.abs(target-closest)) > (Math.abs(target-tree.value ))){
      closest = tree.value;
    }
    if(target < tree.value){
      return closestNumber(tree.left , target, closest);
    }else if(target > tree.value){
      return closestNumber(tree.right , target, closest);
    }else{
      return closest;
    }
  }
 //============== 2. Another way ===================================//
  /* function closestNode(tree, target, closest){
  currentNode =tree;
  while(currentNode !== null){
    if((Math.abs(target-closest)) > (Math.abs(target - currentNode.value))){
      closest =currentNode.value
    }
    if(target < currentNode.value){
      currentNode =currentNode.left;
    }else if(target > currentNode.value){
      currentNode =currentNode.right;
    }else{
      break;
    }
  }
  return closest;
}
 */

/*
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
   */

//==========================LEETCODE============================================
/*
var closestValue = function(root, target) {
    let closest= root.val;

   function dfs(node){
    if(!node) return;
    if(Math.abs(target - closest) > Math.abs(target - node.val))
        closest =node.val;

    if(target < node.val) return dfs(node.left);
       if(target > node.val)return dfs(node.right);

    }

    dfs(root)
    return closest;

};
*/
//============================================================================================//
//2.******************700. Search in a Binary Search Tree****************************************** */
// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

/* var searchBST = function(root, val) {
    if (root ===null)
        return null;

    if(root.val === val){
        return root;
    }
     if(val > root.val)
        return searchBST(root.right, val);
    else
        return searchBST(root.left, val);

    return root;


}; */


//====================================================================================//
//3. ************************104. Maximum Depth of Binary Tree*********************** */

/* var maxDepth = function(root) {
    let max = 0;
    
    let BFS = (node, level)=>{
        if(node === null) return;
        if(level > max) 
            max= level;
        BFS(node.left, level+1);
        BFS(node.right, level+1);
    }
    BFS(root, 1)
    return max;
}; */