/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (this.length === 0) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let result = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return result;
    }

    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      return null;
    }
    if (this.length === 1) {
      return this.pop();
    }

    let result = this.head.val;
    this.head = this.head.next;
    this.length--;
    return result;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    let count = 0;
    while (count != idx && current !== null) {
      current = current.next;
      count++;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.head === null) {
      return null;
    }

    let count = 0;
    let current = this.head;
    while (count !== idx && current !== null) {
      count++;
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.head === null) {
      return this.unshift(val);
    }

    if (idx === this.length) {
      return this.push(val);
    }

    let count = 0;
    let current = this.head;
    let prev = null;
    while (count < idx && current !== null) {
      count++;
      prev = current;
      current = current.next;
    }

    let newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.head === null) {
      return null;
    }

    if (idx === 1 || idx === this.length - 1) {
      return this.pop();
    }

    let current = this.head;
    let prev = null;
    let count = 0;
    while (current !== null && count < idx) {
      prev = current;
      current = current.next;
      count++;
    }

    prev.next = current.next;
    return current.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.head === null) {
      return 0;
    }

    let sum = 0;
    let current = this.head;
    while (current !== null) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
