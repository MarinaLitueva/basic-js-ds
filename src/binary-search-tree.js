'use strict'

//const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null
  }
}

class BinarySearchTree {
  #newNode;

  constructor() {
    this.mainRoot = null;
  }

  root() {
    return this.mainRoot
  }

  add(data) {
    this.#newNode = new Node(data);
    if (!this.mainRoot) {
      this.mainRoot = this.#newNode;
      return
    }

    let currentNode = this.mainRoot;
    while (currentNode) {
      if (this.#newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = this.#newNode;
          return
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = this.#newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return this.searchNode(this.mainRoot, data);
  }

  searchNode(node, data) {
    if (node == null) {
      return false;
    }
    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return true;
    }
  }

  find(data) {
    return this.findNode(this.mainRoot, data);
  }

  findNode(node, data) {
    if (!node ) {
      return null;
    }

    if (node.data === data ) {
      return node;
    }

   if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.mainRoot = this.removeNode(this.mainRoot, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else{
      if(node.left === null && node.right === null){
        node = null;
        return node;
      }else if(node.left === null){
        node = node.right;
        return node;
      }else if(node.right === null){
        node = node.left;
        return node;
      } else {
        let tempNode= this.minNode(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
      }
    }
    return node;
  }

  minNode(node){
    while(node.left){
      node = node.left
    }
    return node;
  }

  min() {
    let node = this.mainRoot;
    if (node) {
      while (node && node.left) {
        node = node.left;
      }
      return node.data;
    }
    return null;
  }

  max() {
    let node = this.mainRoot;
    if (node) {
      while (node && node.right) {
        node = node.right;
      }
      return node.data;
    }
    return null;
  }
}


module.exports = {
  BinarySearchTree
};
