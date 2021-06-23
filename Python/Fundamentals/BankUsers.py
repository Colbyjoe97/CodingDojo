class BankAccount:
    def __init__(self, int_rate, account_balance):
        self.int_rate = 0.02
        self.account_balance = 0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def withdraw(self, amount):
        self.account_balance -= amount
        return self

    def account_info(self, account_balance):
        print("Account Balance: ", self.account_balance)
        return self

    def yield_interest(self, account_balance):
        self.account_balance += self.account_balance * self.int_rate
        return self


class User:
    def __init__(self, name, account):
        self.name = name
        self.account = BankAccount(account_balance = 0, int_rate = 0.02)

    def make_deposit(self, amount):
        self.account.account_balance += amount
        return self

    def make_withdraw(self, amount):
        self.account.account_balance -= amount
        return self

    def display_balance(self, account):
        print(f"{self.name}'s","Account Balance:", self.account.account_balance)
        return self

alex = User("Alex", User)
alex.make_deposit(50).make_deposit(150).make_deposit(1250).make_withdraw(75).display_balance(User)

kyle = User("Kyle", User)
kyle.make_deposit(25000).make_deposit(1500).make_withdraw(2500).make_withdraw(250).make_withdraw(50).make_withdraw(1000).display_balance(User)