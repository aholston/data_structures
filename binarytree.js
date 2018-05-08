function BST(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// INSERT
BST.prototype.insert = function(val) {
  if (val <= this.val) {
    if (!this.left) {
      this.left = new BST(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.val) {
      if (!this.right) {
        this.right = new BST(val);
      } else {
        this.right.insert(val);
      }
  }
}

// CONTAINS
BST.prototype.contains = function(val) {
  if (this.val === val) {
    return true;
  } else if (this.val < val) {
    if (!this.left) {
      return false
    } else {
      this.left.contains(val)
    }
  } else {
    if (!this.right) {
      return false;
    } else {
      this.right.contains(val)
    }
  }
}
