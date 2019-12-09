const Node = (node1) => {
  return {
    value: node1,
    next: null
  }
}

const Lil = () => {
  return {
    head:null,

    values: function() {
      const diffArr = []
      let current = this.head;
      while (current !== null){
        diffArr.push(current.value)
        current = current.next
        
      }
      return diffArr

    },

    addToStart: function(value) {
      if (this.head === null) {
        this.head = Node(value)
      } else if (this.head !== null) {
        let oldHead = this.head
        this.head = Node(value)
        this.head.next = oldHead
        console.log(oldHead)
      }
      
    },

    addToEnd: function(value) {
    
    },

    removeFromStart: function() {
    
    },

    removeFromEnd: function() {
    
    },

    getAt: function(i) {
    
    },

    removeAt: function(i) {
    
    },
  }
}


module.exports = {
  Lil,
  Node,
}