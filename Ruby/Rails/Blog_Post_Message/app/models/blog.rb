class Blog < ActiveRecord::Base
    validates :name, :description, presence: true

    has_many :owners
    has_many :users, through: :owners

    has_many :posts
    has_many :posters, through: :posts, source: :user
end