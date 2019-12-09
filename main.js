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
      const newArr = []
      let current = this.head;
      while (current !== null){
        newArr.push(current.value)
        current = current.next
        
      }
      return newArr

    },

    addToStart: function(value) {

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