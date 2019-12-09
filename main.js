const Node = (node1) => {
  return {
    value: node1,
    next: null
  }
}

const Lil = () => {
  return {
    head: '',

    values: function() {

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