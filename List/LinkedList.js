function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}

function LinkedList () {
    this.head = null;
    this.tail = null;
    this.count = 0;
}

LinkedList.prototype.headPeek = function(){
    return this.head;
};

LinkedList.prototype.tailPeek = function(){
    return this.tail;
};

LinkedList.prototype.appEnd = function (value){
  var node = new Node(value);
  if(!this.head)
    this.head = node;
  else {
    this.tail.next = node;
    node.prev = this.tail;
  }
   this.tail = node;
   this.count++;
  return this;
};

LinkedList.prototype.at = function(index){
  if(index >= this.count || index < 0) 
    return null;
  else{
    var node = this.head;
    for(var i=0; i<index; i++){
      node = node.next;
    }
    return node;
  }
};

LinkedList.prototype.insertAt = function(value, index){
  var node = this.at(index);
  var insertNode = new Node(value);
  this.count++;
  if(node){
    if(node.next && node.prev){
    node.prev.next = newNode;
    newNode.prev = node.prev;
    newNode.next = node; 
    node.prev = newNode; 
      return this;
    }
    if(node.next){
      newNode.next = node; 
      node.prev = newNode; 
      this.head = newNode;
      return this;
     }
  }  
  else if(index >= 0){
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.deleteAt = function(index){
   var node = this.at(index);
   if(node){
     this.count--;
     if(node.next && node.prev){
       node.next.prev = node.prev;
       node.prev.next = node.next;
       return this;
     }
     if(node.prev)
       {
       node.prev.next = null;
       this.tail= node.prev;
       return this;
       }
     if(node.next)
       {
         node.next.prev = null;
         this.head = node.next;
         return this;
       }
   }
  
};


LinkedList.prototype.print = function(){
  var head = this.head;
  while(head){
    console.log(head.value); 
    head = head.next;
  }
};

LinkedList.prototype.reverse = function() {
    var currentNode = this.head;
    var temp;
    while (currentNode) {
        temp = currentNode.prev;
        currentNode.prev = currentNode.next;
        currentNode.next = temp;
        currentNode = currentNode.prev;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    return this;
};

var list = new LinkedList();
list.appEnd(0);
list.appEnd(1);
list.appEnd(2);
list.appEnd(4);
list.appEnd(5);
console.log("print");
list.print();
list.deleteAt(0);
list.deleteAt(3);
console.log("print");
list.print();
list.reverse();
console.log("print");
list.print();
