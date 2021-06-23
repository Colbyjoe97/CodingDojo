class User < ActiveRecord::Base
    has_many :friendships, :class_name => "Friendship"
    has_many :friends, :through => :friendships
end
