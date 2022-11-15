class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) this.root = newNode;
    let currentNode = this.root;
    while (currentNode && (currentNode !== newNode)) {
      // console.log("BEFORE:", currentNode)
      // console.log("NEW NODE VAL:", newNode.val, "CURRENT NODE VAL", currentNode.val);
      // console.log(newNode.val > currentNode.val)
      if (newNode.val < currentNode.val) {
        // console.log("LESS THAN LEFT SIDE")
        if (currentNode.left === null) {
          currentNode.left = newNode;   
        }
        else {
          currentNode = currentNode.left;
          // console.log("LEFT", currentNode)
        }
      }
      if (newNode.val > currentNode.val) {
        // console.log("GREATER THAN RIGHT SIDE")

        if (currentNode.right === null) {
          currentNode.right = newNode;
        }
        else {
          currentNode = currentNode.right;
          // console.log("RIGHT:", currentNode)
        }
      }
    } 
    // console.log("TREE:", this);
    return this;
  }    
    

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode=this.root, newNode=new Node(val)) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    if (newNode.val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return this;
      }
      return this.insertRecursively(val, currentNode=currentNode.left, newNode)
    }
    if (newNode.val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return this;
      }
      currentNode = currentNode.right;
      return this.insertRecursively(val, currentNode=currentNode.left, newNode)
    }   
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
        if (val === currentNode.val) return currentNode;
        if (currentNode.right && (val > currentNode.val)) {
          currentNode = currentNode.right;
          if (val === currentNode.val) return currentNode
        }
        if (currentNode.left && (val < currentNode.val)) {
          currentNode = currentNode.left;
          if (val === currentNode.val) return currentNode
        }
        else return;   
    }    
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode=this.root) {
    if (val === currentNode.val) return currentNode;
    if (currentNode.right && (val > currentNode.val)) {
      return this.findRecursively(val, currentNode=currentNode.right);
    }
    if (currentNode.left && (val < currentNode.val)) {
      return this.findRecursively(val, currentNode=currentNode.left)
    }
    else return;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

   dfsPreOrder() {
    let currentNode = this.root;
    let visitedNodes=[];

    function traverse(currentNode) {
        visitedNodes.push(currentNode.val);
        if (currentNode.left) traverse(currentNode.left);     
        if (currentNode.right) traverse(currentNode.right);   
      }
      traverse(currentNode)
    return visitedNodes;
  }


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let currentNode = this.root;
    let visitedNodes=[];

    function traverse(currentNode) {        
        if (currentNode.left) traverse(currentNode.left);  
        visitedNodes.push(currentNode.val);   
        if (currentNode.right) traverse(currentNode.right);   
      }
      traverse(currentNode)
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let currentNode = this.root;
    let visitedNodes=[];

    function traverse(currentNode) {        
        if (currentNode.left) traverse(currentNode.left);     
        if (currentNode.right) traverse(currentNode.right); 
        visitedNodes.push(currentNode.val);  
      }
      traverse(currentNode)
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

   bfs() {
    let queue = [this.root];
    let visitedNodes=[];    

    while (queue.length) {
      let currentNode = queue.shift()
      visitedNodes.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return visitedNodes;
  }
}

module.exports = BinarySearchTree;
