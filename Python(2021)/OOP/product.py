class Product(object):
    def __init__(self, name, price, weight, brand):
        self.name = name
        self.price = price
        self.weight = weight
        self.brand = brand
        self.status = "For sale"

    def Sell(self):
        self.status = "Sold"
        return(self)

    def Add_Tax(self, tax):
        tax = self.price * tax
        self.price += tax
        print(f"{self.name}'s new price is {self.price}")
        return(self)

    def Return(self, reason):
        if reason == "defective":
            self.status = "Defective"
            self.price = 0
        elif reason == "like new":
            self.status = "For sale"
        elif reason == "used":
            self.status = "Used"
            discount = self.price * 0.20
            self.price -= discount
        return(self)

    def display_info(self):
        print(f"Name: {self.name} \nPrice: ${self.price} \nWeight: {self.weight}lbs \nBrand: {self.brand} \nStatus: {self.status}")
        return self
        
product1 = Product("Shampoo", 5, 2, "Dove").Return("used").display_info()