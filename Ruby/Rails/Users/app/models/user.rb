class User < ActiveRecord::Base
    validates :first_name, :last_name, :email, :age, presence:true
    validates :first_name, :last_name, length: { minimum: 2 }
    validates :age, numericality: { only_integer: true }, inclusion: 10..150
end