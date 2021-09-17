class Bike(object):
    def __init__(self, price, max_speed):
        self.price = price
        self.max_speed = max_speed
        self.miles = 0

    def displayInfo(self):
        print(f"This bike is ${self.price} and can go up to {self.max_speed}MPH. This bike has been driven for {self.miles} miles.")
        return(self)

    def ride(self):
        print("Riding..")
        self.miles += 10
        return(self)

    def reverse(self):
        if self.miles >= 5:
            print("Reversing...")
            self.miles -= 5
        else:
            print("You can't reverse yet!") 
        return(self)   


bike1 = Bike(15, 35).ride().ride().ride().reverse().displayInfo()

bike2 = Bike(150, 70).ride().ride().reverse().reverse().displayInfo()

bike3 = Bike(250, 100).reverse().reverse().reverse().displayInfo()