// SINGLY LINKED LISTS

function Node(val) {
  this.value = val;
  this.next = null;
}

function SList() {
  this.head = null;
  this.tail = null;
  this.count = 0;
}

// APPEND
SList.prototype.append = function(val) {
  if (this.head === null) {
    this.head = new Node(val);
    this.tail = this.head;
    this.count++;
    return;
  }
  runner = this.head;
  while (runner.next !== null) {
    runner = runner.next;
  }
  runner.next = new Node(val);
  this.tail = runner.next;
  this.count++;
  return;
}

// POP
SList.prototype.pop = function() {
  if (this.head.next === null) {
    value = this.head.value;
    this.head = null;
    this.tail = null;
    this.count = 0;
    return value;
  }
  runner = this.head.next;
  follower = this.head;
  while (runner.next !== null) {
    runner = runner.next;
    follower = follower.next;
  }
  follower.next = null;
  this.tail = follower;
  this.count--;
  return runner;
}

// INSERT AFTER 'n'
SList.prototype.insertAfter = function(n, val) {
  runner = this.head;
  jumper = this.head;
  while (runner.value !== n) {
    if (runner == null) {
      return false;
    }
    runner = runner.next;
  }
  if (!runner.next) {
    runner.next = new Node(val);
    this.tail = runner.next
    this.count++;
    return;
  }
  i = new Node(val)
  jumper = runner.next;
  runner.next = i;
  i.next = jumper;
  this.tail = jumper;
  this.count++;
  return;
}

// INSERT BEFORE 'n'
SList.prototype.insertBefore = function(n, val) {
  if (this.head.val === n) {
    i = new Node(val);
    i.next = this.head;
    this.head = i;
    this.count++;
    return
  }
  runner = this.head;
  jumper = this.head;
  i = new Node(val)
  while (runner.next.value !== val) {
    if (runner === null) {
      return false;
    }
    runner = runner.next;
  }
  jumper = runner.next;
  i.next = jumper;
  runner.next = i;
  this.count++;
  return;
}

// DELETION
SList.prototype.delete = function(val) {
  if (this.count == 1) {
    if (this.head.value === val) {
      this.head = null;
      this.tail = null;
      this.count = 0;
      return;
    }
    else { return false; }
  }
  runner = this.head;
  jumper = this.head;
  faller = this.head;

  while(runner.next.value !== val) {
    if (runner === null) {
      return false;
    }
    runner = runner.next;
  }
  if (!runner.next.next) {
    runner.next = null;
    this.tail = runner;
    this.count--;
    return
  }
  faller = runner.next;
  jumper = faller.next;
  runner.next = jumper;
  faller.next = null;
  this.count--;
  return;
}

// DEEP CLONE
SList.prototype.clone = function() {
  list = new SList;
  if (this.count === 1) {
    list.append(this.head.value);
    return list;
  }
  runner = this.head
  while (runner !== null) {
    list.append(runner.value);
  }
  return list;

}

// REVERSE
SList.prototype.reverse = function() {
  walker = this.head;
  runner = walker.next;
  while (runner.next !== null) {
    jumper = runner.next;
    runner.next = walker;
    walker = jumper.next;
    jumper.next = runner;
    runner = walker.next;
    walker.next = jumper;
  }
  runner.next = walker;
  this.head.next = null;
  this.head = runner;
  return;
}

// INDEX
SList.prototype.indexOf = function(val) {
  if (!this.head) {
    return null
  }
  var arr = [];
  var idx = 0
  var runner = this.head
  while (runner.next !== null) {
    if (runner.val === val) {
      arr.push(idx);
    }
    idx++;
    runner = runner.next;
  }
  if (arr.length > 0) {
    return arr;
  } else {
    return false;
  }

}
