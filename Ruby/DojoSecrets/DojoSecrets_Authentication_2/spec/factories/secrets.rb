FactoryBot.define do
  factory :secret do
    content { "This is my first secret" }
    user { User.first }
  end
end
