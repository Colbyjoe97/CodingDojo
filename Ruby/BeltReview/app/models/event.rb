class Event < ActiveRecord::Base
  belongs_to :user
  has_many :attends, dependent: :destroy
  has_many :users, through: :attends

  validates :name, :date, :location, presence: true
  validate :past_date

  def past_date
    if date.present? && date < Date.today
      errors.add(:date, "cannot be in the past")
    end
  end
end
