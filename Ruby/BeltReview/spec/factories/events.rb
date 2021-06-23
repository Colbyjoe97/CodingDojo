FactoryBot.define do
  factory :event do
    name { "MyString" }
    date { "2021-04-20" }
    location { "MyString" }
    user { nil }
  end
end
