FactoryBot.define do
  factory :user do
    name { "Colby" }
    email { "dumonchelle123@gmail.com" }
    password { "password" }
    password_confirmation { "password" }
  end
end
