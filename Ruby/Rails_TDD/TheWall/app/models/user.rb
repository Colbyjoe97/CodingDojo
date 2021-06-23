class User < ActiveRecord::Base
    validates :first_name, length: { in: 6..25, message: "must be between 6 and 25 characters." }
    has_many :messages
    has_many :comments
end
