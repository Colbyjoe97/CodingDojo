class Node:
    def __init__(self, valueInput):
        self.value = valueInput
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, valueInput):
        #create a node (car) with that valueInput
        newNode = Node(valueInput)
        if self.head == None: #if nobody is at front of line, then line is empty
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode
        return self

    def dequeue(self):
        if self.head != None:
            temp = self.head.value
            self.head = self.head.next
            return temp
        else:
            print("nothing in queue")
            return None

    def front(self):
        if self.head != None:
            return self.head.value
        else:
            print("nothing in queue")
            return None

    def isEmpty(self):
        if self.head == None:
            return True
        else:
            return False

    def contains(self, valueToFind):
        runner = self.head
        while runner != None:
            if runner.value == valueToFind:
                return True
            runner = runner.next

        return False

    def size(self):
        runner = self.head
        count = 0
        while runner != None:
            count += 1
            runner = runner.next
        return count




    def display(self):
        runner = self.head
        output = ""
        while runner != None:
            output += f"{runner.value} -->"
            runner = runner.next
        print(output)
        return self


class Stack:
    def __init__(self):
        self.top = None

    def push(self, valueInput):
        newNode = Node(valueInput)
        if self.top == None:
            self.top = newNode
        else:
            newNode.next = self.top
            self.top = newNode
        return self

    def pop(self):
        temp = self.top.value
        self.top = self.top.next
        return temp

    def display(self):
        runner = self.top
        result = ""
        while runner != None:
            result += f"{runner.value}-->"
            runner = runner.next
        print(result)
        return self

    def contains(self, valueToFind):
        # HINT: to go from node to node, use a runner
        if self.top == None:
            print("no nodes in this list")
            return False
        else:
            runner = self.top
            while runner!= None:
                if runner.value == valueToFind:
                    print("found the value!")
                    return True
                runner = runner.next
            return False

    def size(self):
        count = 0
        runner = self.top
        while runner!= None:
            count+=1
            runner = runner.next
        return count

def isQueuePalindrome(queueInput): # Outside the class
    newStack = Stack()
    size = queueInput.size()
    for i in range(0, size, 1):
        dequeuedValue = queueInput.dequeue()
        newStack.push(dequeuedValue)
        queueInput.enqueue(dequeuedValue)

    runner1 = queueInput.head
    runner2 = newStack.top
    for i in range(0, size, 1):
        if runner1.value != runner2.value:
            return False
        runner1 = runner1.next
        runner2 = runner2.next
    return True






driveThrough = Queue()
driveThrough.enqueue(5).enqueue(8).enqueue(18).enqueue(15)

queue2 = Queue()
queue2.enqueue(5).enqueue(8).enqueue(8).enqueue(5)



print(isQueuePalindrome(queue2)) # Prints True because queue2 is a palindrome

driveThrough = Queue()
driveThrough.enqueue("Brad").enqueue("Charles").enqueue("Dawn").display() # Prints everything in the queue after adding the 3 names
driveThrough.dequeue() # <-- Removes Brad (first in queue)
print(driveThrough.contains("Charles")) # <-- Returns True because Charles is in the queue
driveThrough.display()
print(driveThrough.size()) # <-- prints the size of the queue


