require 'rails_helper'

RSpec.describe User do

  context 'With valid attributes' do
    it "should save" do
      user = User.new(
        first_name: 'shane',
        last_name: 'chang',
        email: 'schang@codingdojo.com'
      )
      expect(user).to be_valid
    end
  end

  context 'With invalid attributes' do
    it 'should not save if first_name field is blank' do
      user = User.new(
        first_name: '',
        last_name: 'chang',
        email: 'schang@codingdojo.com'
      )
      expect(user).to be_invalid
    end
  end

  it 'should not save if last_name field is blank' do
    user = User.new(
      first_name: "colby",
      last_name: "",
      email: "colby@codingdojo.com"
    )
    expect(user).to be_invalid
  end


  it 'should not save if email already exists' do
    User.create(first_name:"john", last_name:"snow", email:"jsnow@gmail.com")
    user = User.new(
      first_name:"jack",
      last_name:"snow",
      email:"jsnow@gmail.com"
    )
    expect(user).to be_invalid
  end


  it 'should not save if invalid email format' do
    user = User.new(
      first_name:"colby",
      last_name:"dumonchelle",
      email:"test"
    )
    expect(user).to be_invalid
  end



end
