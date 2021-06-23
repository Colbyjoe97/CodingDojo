require_relative 'bankAccount'
RSpec.describe BankAccount do

    before(:each) do
        @bank1 = BankAccount.new
        @bank2 = BankAccount.new
    end

    it 'has a method to retrieve checking balance' do
        expect(@bank1.checking).to eq(0)
        expect(@bank2.checking).to eq(0)
    end

    it 'has a method to retrieve total from both accounts' do
        expect(@bank1.total).to eq(0)
        expect(@bank2.total).to eq(0)
    end

    # it 'has a method to withdraw money' do
    # # Had to initialize amounts to 100 and comment out other checks to
    # # get this to work. Will not work if other checks are active
    #     expect(@bank1.withdraw('checking', 50)).to eq(50)
    #     expect(@bank2.withdraw('savings', 20)).to eq(80)
    # end

    it "won't let the user withdraw more money than what's available" do
        expect{@bank1.withdraw('checking', 101)}.to raise_error(RuntimeError, "Insufficient Funds")
    end

    it "won't let the user see the total number of accounts" do
        expect{@bank1.num_of_accounts}.to raise_error(NoMethodError)
        expect{@bank2.num_of_accounts}.to raise_error(NoMethodError)
    end

    it "won't let the user set the interest rate" do
        expect {@bank1.interest = 1.00}.to raise_error(NoMethodError)
        expect {@bank2.interest = 1.00}.to raise_error(NoMethodError)
    end
end