class User < ActiveRecord::Base
  has_secure_password

  validates :name, presence: true

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

  before_create do |user|
    user.email = user.email.downcase
  end
end
