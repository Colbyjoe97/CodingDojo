class Student < ActiveRecord::Base
  belongs_to :dojo
  validates :first_name, :last_name, :email, :dojo_id, presence: true
end
