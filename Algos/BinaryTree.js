class BTNode{
    constructor(value){
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST{
    constructor(){
      this.root = null;
      this.count = 0;
    }

    height(node){
        if(node == null){
            return 0;
        }
        let level = 1;
        let levelLeft = 0;
        let levelRight = 0;
        levelLeft += this.height(node.left);
        levelRight += this.height(node.right);
        if(levelLeft < levelRight){
            level += levelRight;
        }
        else{
            level += levelLeft;
        }
        console.log("Level: ")
        console.log(level)
        return level;
    }
    size(){
        console.log(this.count);
        return this;
    }

    AddLeaf(val) {
        let newNode = new BTNode(val)
        if(!this.root){
            this.count++
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while (runner) {
            if (val > runner.val) {
                if(runner.right){
                    this.count++
                    runner = runner.right;
                }
                else{
                    this.count++
                    runner.right = newNode;
                    return this;
                }
            }
            else if (val < runner.val) {
                if(runner.left){
                    this.count++
                    runner = runner.left
                }
                else{
                    this.count++
                    runner.left = newNode;
                    return this
                }
            }
            else{
                return "Already in tree";
            }
        }
    }
    MinVal(){
        if(!this.root){
            return null
        }
        let runner = this.root;
        while(runner.left){
            runner = runner.left;
        }
        return runner;
    }
    IsBalanced(runner = this.root){
        if(runner == null){
            return true;
        }
        else{
            let differ = Math.abs(this.height(runner.left) - this.height(runner.right));
            if(differ < 1){
                return false;
            }
            else{
                return this.IsBalanced(runner.left) && this.IsBalanced(runner.right);
            }
        }
    }
  }

var list = new BST
console.log(list.AddLeaf(15).AddLeaf(12).AddLeaf(25).AddLeaf(7).AddLeaf(2));
list.height();
list.IsBalanced();