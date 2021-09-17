class Animal(object):
    def __init__(self, name):
        self.name = name
        self.health = 100

    def walk(self):
        self.health -= 1
        print(f"{self.name} went for a walk and lost 1 health")
        return(self)

    def run(self):
        self.health -= 5
        print(f"{self.name} went for a run and lost 5 health")
        return(self)

    def display_health(self):
        print(f"{self.name} has {self.health} remaining health")



class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)
        self.health = 150

    def pet(self):
        self.health += 5
        return(self)
    


class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(name)
        self.health = 170

    def fly(self):
        self.health -= 10
        return(self)

    def display_health(self):
        print(f"I'm a Dragon with {self.health} health")
        return(self)



animal1 = Animal("Buddy").walk().walk().walk().run().run().display_health()
dog1 = Dog("Spot").walk().walk().walk().run().run().pet().display_health()
dragon1 = Dragon("Elizabeth").fly().fly().fly().display_health()