class Node:
    def __init__(self, valueInput):
        self.value = valueInput
        self.next = None

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

    def pop(self): # Cannot chain because temp is returned instead of self
        temp = self.top
        self.top = self.top.next
        return temp

    def display(self): # Displays the queue
        runner = self.top
        output = ""
        while runner != None:
            output += f"{runner.value} --> "
            runner = runner.next
        print(output)
        return self

    def contains(self, valueToFind):
        if self.top == None:
            print("No nodes in this list")
            return False
        else:
            runner = self.top
            while runner != None:
                if runner.value == valueToFind:
                    print("Found the vlaue!")
                    return True
                runner = runner.next
            return False

    def size(self):
        count = 0
        runner = self.top
        while runner != None:
            count += 1
            runner = runner.next
        print(f"count: {count}")
        return count


stack1 = Stack()
stack1.push(5).push(12).push(24).display().pop()
stack1.contains(5)
stack1.size()
stack1.display()