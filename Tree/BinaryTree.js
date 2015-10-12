function Node(value, parent) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
    return this;
}

function BinaryTree() {
    this.root = null;
}


BinaryTree.prototype.Insert = function (newValue){
        if(!this.root) 
            this.root = new Node(newValue,null);
        else {
          var value = newValue;
            (function insert(parentNode){ 
                if(value < parentNode.value) {
                    if(!parentNode.left) 
                        parentNode.left = new Node(value, parentNode);  
                    else 
                        insert(parentNode.left);
                } 
                else 
                    if(!parentNode.right) 
                        parentNode.right = new Node(value, parentNode);  
                    else 
                        insert(parentNode.right);
            })(this.root);        
    }
  return this;
};

BinaryTree.prototype.GetNode = function(value) {
    var node = this.root;
    var get = function(node) {
        if (!node) return null;
        if (value === node.value) 
            return node;
            else if (value > node.value) 
                return get(node.right);
            else if (value < node.value) 
                return get(node.left);
    };
    return get(node);
};

BinaryTree.prototype.inOrderTraversal = function(){
    (function inorderTraversal(node) {  
    if(node.left) {
        inorderTraversal(node.left);
    }
    console.log(node.value);
    if(node.right) {
        inorderTraversal(node.right);
    }
})(this.root);
};

function DeleteNode(value){
    var node = this.GetNode(value);
    if(node){
      if(!node.left && !node.right){ 
        if(node.parent.left === node)
          node.parent.left = null;
        else 
          node.parent.right = null;
      }
      else if(!node.left) { 
        if(node.parent.left === node)
          node.parent.left = node.right;
        else 
          node.parent.right = node.right;
      }
      else if(!node.right) { 
        if(node.parent.left === node)
          node.parent.left = node.left;
        else 
          node.parent.right = node.left;
      }
      else if (node.left && node.right){
          var replaceNode=node.right;
          while(replaceNode.right){
              replaceNode=replaceNode.right;
          }
          if (replaceNode.left){
              replaceNode.left.parent= replaceNode.parent;
              replaceNode.parent.right=replaceNode.left;
          }
          replaceNode.parent=node.parent;
          replaceNode.left=node.left;
		  if (replaceNode!==node.right)
			replaceNode.right=node.right;
       // node.right.parent = node.parent;
       // node.right.left = node.left;
       // node.left.parent = node.right;
		if (node.parent){
        if(node.parent.left === node)
           node.parent.left = replaceNode;
        else
           node.parent.right = replaceNode;
		 }
		 else this.root=replaceNode;
      }    
    }
}

function inheritance(child, parent){
    var Temp = function(){};
    Temp.prototype = parent.prototype;
    child.prototype = new Temp();
    child.prototype.deleteNode = DeleteNode;
  child.prototype.constructor = child;
    child.superclass = parent.prototype;
    return child;
}


function ChildBinaryTree(){
    BinaryTree.apply(this,arguments);
}

inheritance(ChildBinaryTree,BinaryTree);


var bt = new BinaryTree();
    bt.Insert(47);
    bt.Insert(82);
	bt.Insert(16);
	bt.Insert(5);
	bt.Insert(22);
	bt.Insert(80);
	bt.Insert(70);

var cbt = new ChildBinaryTree();

    cbt.Insert(47);
    cbt.Insert(82);
	cbt.Insert(16);
	cbt.Insert(5);
	cbt.Insert(22);
	cbt.Insert(80);
	cbt.Insert(70);


console.log("print");
cbt.inOrderTraversal();
cbt.deleteNode(47);
console.log("print");
cbt.inOrderTraversal();