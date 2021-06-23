class User:
    def __init__(self, name):
        self.name = name
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def withdraw(self, amount):
        self.account_balance -= amount
        return self

    def display_balance(self, balance):
        print(f"{self.name}'s Account Balance:", self.account_balance)
        return self

alex = User("alex")
alex.make_deposit(50).make_deposit(150).make_deposit(1250).withdraw(75).display_balance(User)

kyle = User("kyle")
kyle.make_deposit(1150).make_deposit(5250).withdraw(250).withdraw(750).display_balance(User)

ashley = User("ashley")
ashley.make_deposit(5200).withdraw(250).withdraw(1250).withdraw(950).display_balance(User)