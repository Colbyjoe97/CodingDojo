class User < ActiveRecord::Base
    validates :first_name, :last_name, presence: true
    EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
    validates :email, uniqueness: true, presence: true, format: { with: EMAIL_REGEX }
end
