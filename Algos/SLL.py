class Node:
    def __init__(self, valueInput):
        self.value = valueInput
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

    def addToBack(self, valueInput): # Adds a node to the back of the list
        newnode = Node(valueInput)
        if self.head == None: # If there is no starter node, create one called newnode
            self.head = newnode
        else:
            #runner is a variable we use to iterate through the SLL
            runner = self.head # If there is a starter node, create a variable runner and iterate through the list

            while runner.next != None:
                runner = runner.next

            runner.next = newnode
        return self

    def display(self):
        runner = self.head # Prints out the list
        result = ""
        while runner != None: # If runner has a value, add that value to the result and print it to the terminal
            result += f"{runner.value}-->"
            runner = runner.next
        print(result)
        return self

    def contains(self, valueToFind):
        # HINT: to go from node to node, use a runner
        if self.head == None:
            print("no nodes in this list fam")
            return False
        else:
            runner = self.head
            while runner!= None:
                if runner.value == valueToFind:
                    print("found the value!")
                    return True
                runner = runner.next
            return False

    def addFront(self, valueInput):
        newnode = Node(valueInput)
        newnode.next = self.head
        self.head = newnode
        return self

    def removeFront(self): # Removes the first node
        if self.head != None:
            self.head = self.head.next
        return self

    def removeTail(self): # Removes the last node
        if self.head == None:
            print("List must contain values")
            return self
        elif self.head.next == None: # If the current node is the last node in the list, remove it (or equal 'None')
            self.head = None
            return self
        runner = self.head
        while runner.next.next != None: # Pushes the second to last node to be the last node
            runner = runner.next
        runner.next = None
        return self

def moveMinToFront(sllInput):
    minvalue = sllInput.head.value # minvalue = first node value
    runner = sllInput.head  #runner = first node
    beforeNode = None
    while runner.next != None:
        if runner.next.value < minvalue: # if node is not last and next value is less than current min value
            minvalue = runner.next.value # minvalue = first node
            minNode = runner.next # push other nodes back
            beforeNode = runner
        runner = runner.next  # If the if statement does not happen, runner continues iterating through the list
    if beforeNode != None:
        beforeNode.next = minNode.next
        minNode.next = sllInput.head
        sllInput.head = minNode
    else:
        print("min already in the front!")
    return sllInput

def prependVal(sllInput, valToInsert, valToFind): # Insert a Node before a given node
    # Egde Case: If list has nothing
    if sllInput.head == None:
        sllInput.addFront(valToInsert)
        return sllInput
    else:
        newNode = Node(valToInsert)
        runner = sllInput.head
        while runner.next != None:
            if runner.next.value == valToFind:
                newNode.next = runner.next
                runner.next = newNode
                return sllInput
            else:
                runner = runner.next
        sllInput.addToBack(valToInsert) # If valToFind is not found, ass valToInsert to the back of the list
        return sllInput



sll1 = SLL()


sll1.addToBack(5).addToBack(8).addToBack(10).addToBack(20).addToBack(1).addFront(-15) # Adds all numbers to list from left to right
# sll1.removeFront().display() # Removes the first number from the list
# sll1.removeTail().display()  # Removes the last number from the list
moveMinToFront(sll1).display()
prependVal(sll1, 50, 10).display()
sll1.contains(5)
sll1.display()