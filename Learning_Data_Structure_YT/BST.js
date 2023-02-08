class Node{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree{
    constructor(){
      this.root = null;
    }
  
    isEmpty(){
      return this.root === null;
    }
  
    insert(value){
      const newNode = new Node(value);
      //if root is empty then add value to the root/ left/right.
      if(this.isEmpty()){
        this.root = newNode;
        //call the insert method
      }else{
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(root, newNode){
      //if the value is less than root value, move left side.
      if(newNode.value < root.value){
        //check if left is null then all newNode to the left of the current root.
        if(root.left === null){
          root.left = newNode;
          //if left is present then call insert method recursively to check next.
        }else{
          this.insertNode(root.left, newNode);
        }
        //else if value is greater than the root value, move right side
      }else if(newNode.value > root.value){
        //check if right is null then all newNode to the right of the current root.
        if(root.right === null){
          root.right = newNode;
          //if right is present then call insert method recursively to check next.
        }else{
          this.insertNode(root.right, newNode);
        }
      }
    }
  
      search(root, value){
        //First if root is null return false.(Empty node)
        if(!root) {
          return false;
        // if root value is qual to the searching value return true.
        }else if(root.value === value){
          return true;
        //else check if value is less than root value search recursively on left side of the tree.
        }else if(value < root.value){
          return this.search(root.left, value);
      //else check if value is greater than root value search recursively on right side of the tree.
        }else {
          return this.search(root.right, value);
        }
    
      }
      
  }
    
  
  
  const bst = new BinarySearchTree();
  console.log("Tree is empty?",  bst.isEmpty());
  bst.insert(5);
  bst.insert(10);
  bst.insert(11);
  
  console.log(bst.search(bst.root, 10));
  console.log(bst.search(bst.root, 5));
  console.log(bst.search(bst.root, 11));
  
  