class Message < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  validates :content, :user, presence: true
end
