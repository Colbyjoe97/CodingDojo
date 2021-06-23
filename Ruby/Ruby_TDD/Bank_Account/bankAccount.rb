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

    def withdraw(type, amount)
        if @savings > amount|| @checking > amount
            if type == "checking"
                @checking -= amount
                p @checking
            elsif type == "savings"
                @savings -= amount
                p @savings
            end
        else
            raise "Insufficient Funds"
        end
    end

    def total
        p @savings + @checking
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

    def checking
        p @checking
    end

    private
    def account_number
        @account_number = rand(10000..50000)
    end
end

# bank1 = BankAccount.new.deposit_savings(25).deposit_checking(52).withdraw_savings(5).withdraw_checking(10).account_info
# bank2 = BankAccount.new.accounts.account_info
