class SLNode{
    constructor(num){
        this.val = num;
        this.next = null;
    }
}


class SLL{
    constructor(){
        this.head = null;
        this.count = 0;
    }

    add(num){
        if(this.head == null){
            this.head = new SLNode(num);
        }
        else{
            let runner = this.head;
            while(runner.next !== null){
                runner = runner.next;
            }
            runner.next = new SLNode(num);
        }
        this.count ++;
        return this;
    }

    reverse(){
        let runner = this.head;
        let next = this.head.next;
        let prev = null;
        while(runner != null){
            runner.next = prev;
            prev = runner;
            runner = next;
            if(next){
                next = next.next;
            }
        }
        this.head = prev;
    }

    addChild(val, list){
        if (this.head === null){
            console.log("There is no list");
            return this;
        }
        var runner = this.head
        while(runner){
            if (runner.val == val){
                runner.child = list;
                return this;
            }
            runner = runner.next;
        }
        console.log("Didn't find the node you were searching for.");
        return this;
    }

    flatten(){
        if(this.head === null){
            return this;
        }
        var runner = this.head;
        while(runner){
            if(runner.child){
                console.log("Found the child");
                console.log(runner.child);
                var temp = runner.next;
                var cRunner = runner.child.head;
                runner.next = cRunner;

                while(cRunner.next){
                    cRunner = cRunner.next;
                    this.count ++;
                }
                cRunner.next = temp;
                runner = temp;
                break;
            }
            runner = runner.next;
        }
    }

    hasLoop(){
        var tempCount = 0;
        var runner = this.head;
        while(runnner){
            tempCount ++;
            if(tempCount > this.count){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    display(){
        if(this.head === null){
            console.log("This is not the list you are looking for.");
            return this;
        }
        var runner = this.head;
        while(runner !== null){
            console.log(runner.val);
            runner = runner.next;
        }
        return this;
    }
}
console.log("**********************************************");
var list = new SLL();
var childList = new SLL();
childList.add(15).add(12).add(3);
list.add(6).add(9).add(14).add(15).add(3).add(4);
list.display();
list.reverse();
list.display();
// list.addChild(3, childList);
// list.flatten();