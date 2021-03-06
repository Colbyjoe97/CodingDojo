class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :message

  validates :content, :user, :message, presence: true
end
