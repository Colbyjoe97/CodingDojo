class BankAccount
    @@num_of_accounts = 0
    @@interest = 0.01
    attr_accessor :checking, :savings
    def initialize
        @checking = 0
        @savings = 0
        @@num_of_accounts += 1
    end

    def account_info
        total = @savings + @checking
        puts "Your checking account balance: #{checking}"
        puts "Your savings account balance: #{savings}"
        puts "You have $#{total} between your checking and savings accounts!"
        puts "Current interest rate is #{@@interest}"
        puts "Your account number: #{account_number}"
        self
    end

    def deposit_savings(amount)
        @savings += amount
        puts "$#{amount} was deposited into your savings account"
        self
    end

    def deposit_checking(amount)
        @checking += amount
        puts "$#{amount} was deposited into your checking account"
        self
    end

    def withdraw_savings(amount)
        if @savings > amount
            @savings -= amount
            puts "$#{amount} was taken from your savings account"
            self
        else
            puts "You do not have enough money in your savings account!"
            self
        end
    end

    def withdraw_checking(amount)
        if @checking > amount
            @checking -= amount
            puts "$#{amount} was taken from your checking account"
            self
        else
            puts "You do not have enough money in your checking account!"
            self
        end
    end

    def total
        total = @savings + @checking
        puts "You have $#{total} between your checking and savings accounts!"
        self
    end

    def accounts
        if @@num_of_accounts == 1
            puts "There is #{@@num_of_accounts} account registered at the bank!"
            self
        else
            puts "There are #{@@num_of_accounts} accounts registered at the bank!"
            self
        end
    end

    private
    def account_number
        @account_number = rand(10000..50000)
    end
end

bank1 = BankAccount.new.deposit_savings(25).deposit_checking(52).withdraw_savings(5).withdraw_checking(10).account_info
bank2 = BankAccount.new.accounts.account_info
