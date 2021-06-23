FactoryBot.define do
  factory :like do
    user { User.first }
    secret { Secret.last }
  end
end
