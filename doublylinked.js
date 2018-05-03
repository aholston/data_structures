function Node(val) {
  this.value = val;
  this.next = null;
  this.previous = null;
}

function DList() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}

// APPEND
DList.prototype.append = function(val) {
  runner = this.head;
  node = new Node(val)
  if (this.count === 1) {
    node.previous = runner;
    runner.next = node;
    this.count++;
    return;
  }
  while (runner.next !== null) {
    runner = runner.next;
  }
  node.previous = runner;
  runner.next = node;
  this.count++;
  return;
}

// PREPEND
DList.prototype.prepend = function(val) {
  runner = this.head;
  node = new Node(val);
  node.next = runner;
  runner.previous = node;
  this.head = node;
  this.count++
  return
}

// POP
DList.prototype.pop() {
  if (this.count === 0) {
    return false;
  }
  if (this.count === 1) {
    value = this.head.value;
    this = null;
    return value;
  }
  runner = this.head;
  while (runner.next.next !== null) {
    runner = runner.next;
  }
  jumper = runner.next
  jumper.previous = null;
  runner.next = null;
  this.count--;
  return jumper.value;
}

// REMOVE HEAD
DList.prototype.removeHead = function() {
  if (!this.head) {
    return false
  }
  var val = this.head.val;
  this.head = this.head.next;
  if (this.head) {
    this.head.previous = null;
  } else {
    this.tail = null;
  }
  this.count--;
  return val;
}

// DELETE
DList.prototype.delete = function(val) {
  if (this.count === 1) {
    if (this.head.value === val) {
      this.head = null;
      return val;
    }
    else { return false }
  }
  runner = this.head;
  jumper = this.head;
  faller = this.head;
  while (faller.value !== val) {
    faller = faller.next;
  }
  runner = faller.previous;
  jumper = faller.next;
  runner.next = jumper;
  jumper.previous = runner;
  faller.next = null;
  faller.previous = null;
  return
}

// REVERSE
DList.prototype.reverse = function() {
  if (this.count < 3) {
    first = this.head;
    second = first.next;
    second.previous = null;
    second.next = first;
    first.previous = second;
    first.next = null;
    this.head = second;
    return
  }
  runner = this.head.next
  follower = this.head
  skipper = runner.next
  while (runner.next !== null) {

    i = skipper.next;
    skipper.previous = i;
    skipper.next = runner;
    runner.next = follower;
    runner.previous = skipper;
    follower = i;
  }
  this.head.next = null;
  this.head = runner;
  return
}

// SEARCH
DList.prototype.search = function(val) {
  if (this.count === 0) {
    return false;
  }
  var runner = this.head;
  while (runner.next !== null) {
    if runner.val === val {
      return true
    }
    runner = runner.next;
  }
  return false;
}
