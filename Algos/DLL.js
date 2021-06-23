class DLNode{
    constructor(num){
        this.val = num;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    AddToFront(num){
        if (this.head == null){
            this.head = new DLNode(num);
            this.tail = this.head;
        }
        else{
            this.head.prev = new DLNode(num);
            this.head.prev.next = this.head;
            this.head = this.head.prev;
        }
        this.count++;
        return this;
    }

    AddToBack(num){
        if (this.head == null){
            this.head = new DLNode(num);
            this.tail = this.head;
        }
        else{
            this.tail.next = new DLNode(num);
            this.tail.next.prev = this.tail;
            this.tail = this.tail.next;
        }
        this.count++;
        return this;
    }

    Display(){
        if (this.head === null){
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
    Reverse(){ // Only works on AddToBack
        let runner = this.head;
        while(runner){
            [runner.next,runner.prev] = [runner.prev,runner.next]
            runner = runner.prev;
        }
        [this.head,this.tail] = [this.tail,this.head]
    }
}

var list = new DLL();
list.AddToFront(2).AddToBack(15).AddToBack(0).AddToBack(251).AddToBack(25).Reverse();
list.Display();
