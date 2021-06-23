class User < ActiveRecord::Base
  has_secure_password
  has_many :events
  has_many :attending, dependent: :destroy
  has_many :events_attending, through: :attending, source: :event

  validates :first_name, :last_name, :email, :location, :password, presence: true

  EMAIL_REGEX = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]+)\z/i
  validates :email, uniqueness: { case_sensitive: false }, format: { with: EMAIL_REGEX }

  before_create do |user|
    user.email = user.email.downcase
  end
end
