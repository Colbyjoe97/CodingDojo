require_relative 'tree'

RSpec.describe AppleTree do
    before(:each) do
        @tree = AppleTree.new
    end

    it 'has a getter and setter for age attribute' do
        @tree.age = 3

        expect(@tree.age).to eq(3)
    end

    it "doesn't grow apples for the first 3 years" do
        @tree.year_gone_by
        expect(@tree.apple_count).to eq(0)
    end

    it "doesn't let the user change the tree's height" do
        expect{@tree.height = 5}.to raise_error(NoMethodError)
    end

    it "doesn't let the user change the tree's apple count" do
        expect{@tree.apple_count = 5}.to raise_error(NoMethodError)
    end
end