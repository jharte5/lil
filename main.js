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
      if (!this.head) {
        this.head = Node(value)
      } else if (this.head) {
        let oldHead = this.head
        this.head = Node(value)
        this.head.next = oldHead
        // console.log(oldHead)
      }
      
    },

    addToEnd: function(value) {
      if (!this.head) {
        this.head = Node(value)
      }else {
        let current = this.head
      while (current.next !== null){
        current = current.next
      }
      current.next = Node(value)
      // console.log(this.head)
    }
    },

    removeFromStart: function() {
    let removedValue = this.head.value
      this.head = this.head.next
      return removedValue
    },

    removeFromEnd: function() {
      let current = this.head
      let previous = current
      while (current.next !== null){
        previous = current
        current = current.next
      }
      let removedValue = current.value
      previous.next = null
      return removedValue

    },

    getAt: function(i) {
      if (!this.head){
        return null
      }
      let count = 0
      let current = this.head
      while (count <i) {
        current = current.next
        count ++
      }
      return current.value
    
    },

    removeAt: function(i) {
      if (this.head === null){
        return null
      }
      let count = 0
      let current = this.head

      while (count < i - 1) {
        current = current.next
        count ++
      }
      const toRemove = current.next.value
      return toRemove
    },
  }
}


module.exports = {
  Lil,
  Node,
}