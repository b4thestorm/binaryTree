class Node {
  constructor(val, par, left, right) {
    this.val = val;
    this.parent = par;
    this.left = left 
    this.right = right;
  }
}

# have a linked list structure
class BinarySearchTree {
  constructor(root) {
    this.root = root
  }
  
  //recursive insertion
  insert(targetNode) {
    let current = root
   
    function insertionHelper(node, targetNode) {
      if (node === null) {
        return
      }
    
    //left insertion
    if (node.val > targetNode.val && node.left == null) {
      node.left = targetNode;
      targetNode.parent = node;
      return
    }
    
    //right insertion
    if (node.val < targetNode.val && node.right == null) {
      node.right = targetNode;
      targetNode.parent = this;
      return
    }
        
      if (node.val < targetNode.val) {
        insert(node.right)
      } else if (node.val > targetNode.val) {
        insert(node.left)
      }
    }
    
    insertionHelper(current, targetNode)
    
    return current    
  }
  
  search(target) {
    let current = this.root
    while (current !== null) {
      if (target === current.val) {
        return true
      }
      
      if (target > current.val) {
        current = current.right
      } else if (target < current.val) {
        current = current.left
      } 
    }
    return false
  }
  
}
